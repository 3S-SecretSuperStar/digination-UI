<template>

  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div >
        <h1 class="mb-5 text-5xl font-bold">Dapp Wallet Modal</h1>
        <p class="mb-5">Dapp ETH Wallet Modal plugin.</p>
        <!-- <button class="btn btn-primary">Get Started</button> -->
        <div v-show="provider === ''">
          <button class="btn btn-success"
                  @click="handleClickConnect">Connect</button>
        </div>
        <div v-show="provider">
          <button class="btn btn-error"
                  @click="handleClickDisconnect">disconnect</button>
          <button class="btn btn-error"
                  @click="handleClickTest">test</button>

          <button class="btn btn-error"
                  @click="handleClickCeshi">Ceshi</button>

                  
        </div>
      </div>
    </div>
  </div>

</template>

 <script>

import Bean from "../assets/Bean.gif";

import WalletConnectLogo from "../assets/logos/walletconnect-circle.svg";

import MetaMaskLogo from "../assets/logos/metamask.svg";

import CoinbaseLogo from "../assets/logos/coinbase.svg";

import BlockWalletLogo from "../assets/logos/BlockWallet.png";

import WalletConnectProvider from "@walletconnect/web3-provider";

import detectEthereumProvider from '@metamask/detect-provider';

import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import Web3 from 'web3'

const CHAINID = 4;

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      baseModel: '',
      provider: '',
      providerOptions: {
        logo: Bean,
        maskColor: 'rgb(30, 30, 30, 0.8)',
        bgColor: '#363636',
        borderColor: '#faba30',
        chainId: CHAINID,
        walletOptions: {
          metamask: {
            displayView: {
              logo: MetaMaskLogo,
              name: "MetaMask",
            },
            options: {
              drive: detectEthereumProvider,
            }
          },
          walletconnect: {
            displayView: {
              logo: WalletConnectLogo,
              name: "WalletConnect",
            },
            options: {
              drive: WalletConnectProvider,
              rpc: {
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
              },
              chainId: CHAINID,
              bridge: 'https://bridge.walletconnect.org'
            }
          },
          coinbase: {
            displayView: {
              logo: CoinbaseLogo,
              name: "Coinbase Wallet",
            },
            options: {
              drive: CoinbaseWalletSDK,
              infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
              chainId: CHAINID,
              appName: 'Digi',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
          blockmallet: {
            displayView: {
              logo: BlockWalletLogo,
              name: "BlockWallet",
            },
            options: {}
          }
        },
      }
    }
  },
  mounted () {
    this.baseModel = new this.$ConnectWallet(this.providerOptions)
    const walletType = sessionStorage.getItem("injected")
    var _this = this
    if (walletType && typeof (walletType) !== 'undefined') {
      setTimeout(function () {
        _this.handleClickConnect()
      }, 1000)
    }
  },
  methods: {
    async handleClickConnect () {
      var provider = await this.baseModel.connect()
      if (provider) {
        this.provider = provider
        console.log('provider', provider)
      }
    },
    handleClickDisconnect () {
      this.baseModel.disconnect(this.provider)
      this.provider = ''
    },
    handleClickTest () {
      if(typeof(this.provider.isMetaMask) !== 'undefined' && this.provider.isMetaMask === true){
          console.log(1)
      }else{
          console.log(2)
      }
    },
    async handleClickCeshi () {
      if(typeof(this.provider.isMetaMask) !== 'undefined' && this.provider.isMetaMask === true){
         var Web3Model = new this.$Web3Model(this.provider, Web3)
          console.log(await Web3Model.checkIsMetaMask(this.provider))
      }else{
          console.log(2)
      }
    },
  }
}
</script>
<style scoped>
.btu button,
label {
  margin-left: 10px;
  margin-bottom: 10px;
}
.py-8 textarea,
.py-4 input {
  width: 100%;
}
.modal-box {
  color: #000;
}
</style>
