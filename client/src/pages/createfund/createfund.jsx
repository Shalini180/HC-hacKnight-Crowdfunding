import React, { useState } from 'react'
import { Upload, Rocket, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import ipfs from './../ipfs'
import getWeb3 from "./../../getWeb3"
import FundRaiserContract from "./../../contracts/fundraiser.json"

const CreateFund = () => {
  const [web3, setWeb3] = useState(null)
  const [accounts, setAccounts] = useState(null)
  const [contract, setContract] = useState(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  React.useEffect(() => {
    initWeb3()
  }, [])

  const initWeb3 = async () => {
    try {
      const web3Instance = await getWeb3()
      const accountsList = await web3Instance.eth.getAccounts()
      const networkId = await web3Instance.eth.net.getId()
      const deployedNetwork = FundRaiserContract.networks[networkId]
      const contractInstance = new web3Instance.eth.Contract(
        FundRaiserContract.abi,
        deployedNetwork && deployedNetwork.address,
      )
      setWeb3(web3Instance)
      setAccounts(accountsList)
      setContract(contractInstance)
      setStatus({ type: 'success', message: 'Wallet connected successfully' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect wallet. Please check MetaMask.' })
      console.error(error)
    }
  }

  const addNewFundraiser = async (ipfshash, goal) => {
    const metamaskAddr = accounts[0]
    await contract.methods.createfundraiser(ipfshash, goal).send({ from: metamaskAddr })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'loading', message: 'Uploading to IPFS...' })

    const formData = {
      firstname: event.target.firstName.value,
      lastname: event.target.lastName.value,
      goalamount: event.target.goal.value,
      minimumamount: event.target.minimum.value,
      recipient: event.target.address.value,
      date1: event.target.date.value,
      descr: event.target.description.value,
    }

    try {
      // Upload to IPFS
      ipfs.files.add(Buffer(JSON.stringify(formData)), async (error, result) => {
        if (error) {
          setStatus({ type: 'error', message: 'IPFS upload failed' })
          setIsSubmitting(false)
          return
        }

        const ipfshash = result[0].hash
        setStatus({ type: 'loading', message: 'Creating campaign on blockchain...' })

        try {
          await addNewFundraiser(ipfshash, formData.goalamount)
          setStatus({ type: 'success', message: 'Campaign created successfully!' })
          event.target.reset()
        } catch (err) {
          setStatus({ type: 'error', message: 'Transaction failed. Please try again.' })
        }
        setIsSubmitting(false)
      })
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred' })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text from-purple-400 to-pink-600">
              Launch Your Vision
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            DeFi Crowdfunding made simple. Create your campaign in minutes.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  placeholder="Satoshi"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                  placeholder="Nakamoto"
                />
              </div>
            </div>

            {/* Goal Amount */}
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-slate-300 mb-2">
                Goal Amount (ETH)
              </label>
              <input
                type="number"
                id="goal"
                name="goal"
                required
                step="0.01"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                placeholder="10.0"
              />
            </div>

            {/* Minimum Donation */}
            <div>
              <label htmlFor="minimum" className="block text-sm font-medium text-slate-300 mb-2">
                Minimum Donation (ETH)
              </label>
              <input
                type="number"
                id="minimum"
                name="minimum"
                required
                step="0.001"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                placeholder="0.01"
              />
            </div>

            {/* Recipient Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-2">
                Recipient Wallet Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none font-mono text-sm"
                placeholder="0x..."
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-2">
                Campaign End Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
                Campaign Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="4"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none"
                placeholder="Describe your project and what you plan to build..."
              />
            </div>

            {/* Image Upload Area (Placeholder) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Campaign Image
              </label>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">
                  Drag & drop your image here, or click to browse
                </p>
                <p className="text-slate-600 text-xs mt-1">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !contract}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Rocket className="w-5 h-5" />
                  <span>Mint Campaign</span>
                </>
              )}
            </button>

            {/* Status Message */}
            {status.message && (
              <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/20' :
                  status.type === 'error' ? 'bg-red-500/10 border border-red-500/20' :
                    'bg-blue-500/10 border border-blue-500/20'
                }`}>
                {status.type === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
                {status.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
                {status.type === 'loading' && <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />}
                <p className={`text-sm ${status.type === 'success' ? 'text-green-300' :
                    status.type === 'error' ? 'text-red-300' :
                      'text-blue-300'
                  }`}>
                  {status.message}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Help Text */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Your campaign will be stored on IPFS and minted as an NFT on the blockchain
        </p>
      </div>
    </div>
  )
}

export default CreateFund