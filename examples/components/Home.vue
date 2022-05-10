<template>
  <div class="demo-main">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div >
        <h1 class="mb-5 text-5xl font-bold">Digi Button </h1>
        <p class="mb-5">Digi Button plugin.</p>

        <div class="item">
            <digi-button   type="primary" >button</digi-button>
            <digi-button   type="success" >button</digi-button>
            <digi-button   type="info" >button</digi-button>
            <digi-button   type="warning" >button</digi-button>
            <digi-button   type="danger" >button</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary" :plain="plain">button</digi-button>
            <digi-button   type="success" :plain="plain">button</digi-button>
            <digi-button   type="info" :plain="plain">button</digi-button>
            <digi-button   type="warning" :plain="plain">button</digi-button>
            <digi-button   type="danger" :plain="plain">button</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary" :round="round">button</digi-button>
            <digi-button   type="success" :round="round">button</digi-button>
            <digi-button   type="info" :round="round">button</digi-button>
            <digi-button   type="warning" :round="round">button</digi-button>
            <digi-button   type="danger" :round="round">button</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary" >button</digi-button>
            <digi-button   type="success" >button</digi-button>
            <digi-button   type="info" >button</digi-button>
            <digi-button   type="warning" >button</digi-button>
            <digi-button   type="danger" >button</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary" :circle="circle">button</digi-button>
            <digi-button   type="success" :circle="circle">button</digi-button>
            <digi-button   type="info" :circle="circle">button</digi-button>
            <digi-button   type="warning" :circle="circle">button</digi-button>
            <digi-button   type="danger" :circle="circle">button</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary" :disabled="disabled">button</digi-button>
            <digi-button   type="success" :disabled="disabled">button</digi-button>
            <digi-button   type="info" :disabled="disabled">button</digi-button>
            <digi-button   type="warning" :disabled="disabled">button</digi-button>
            <digi-button   type="danger" :disabled="disabled">button</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary" :loading="loading">loading</digi-button>
        </div>
        <div class="item">
            <digi-button   type="primary btn-lg">loading</digi-button>
            <digi-button   type="primary">loading</digi-button>
            <digi-button   type="primary btn-sm">loading</digi-button>
            <digi-button   type="primary btn-xs">loading</digi-button>
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

// import Web3 from 'web3'

const CHAINID = 4;

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      visible: false,
      plain: true,
      round: true,
      loading: true,
      circle: true,
      disabled: true,
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
    this.baseModel = new this.$WalletModalModel(this.providerOptions)
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
      if (typeof (this.provider.isMetaMask) !== 'undefined' && this.provider.isMetaMask === true) {
        console.log(1)
      } else {
        console.log(2)
      }
    },
    async handleClickCeshi () {
    //  var sa = await this.baseModel.getChainDetailById(4)
    //  console.log(sa)
      this.visible = true
    },
  }
}
</script>
<style scoped lang="scss">
.demo-main{
  display: flex;
  justify-content: center;
  text-align: center;
  button{
    margin-right: 10px;
  }
  .item{
    margin-bottom: 20px;
  }
}
</style>
