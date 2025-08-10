"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Ecosystem() {
  const [stakingAmount, setStakingAmount] = useState(1000);
  const [apy, setApy] = useState(12.5);
  const [estimatedRewards, setEstimatedRewards] = useState(0);
  
  useEffect(() => {
    const rewards = (stakingAmount * apy) / 100;
    setEstimatedRewards(parseFloat(rewards.toFixed(2)));
  }, [stakingAmount, apy]);
  
  return (
    <section id="ecosystem" className="py-20 px-6 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0a2a] to-[#1a1a2e]"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Bondi <span className="text-gradient">Staking</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Earn rewards while supporting the ecosystem
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-6">Staking Dashboard</h3>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span>Staking APY</span>
                <span className="text-gradient font-bold">{apy}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-8">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                  style={{ width: `${apy}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between mb-4">
                <span>Stake Amount (BONDI)</span>
                <span className="text-muted-foreground">Balance: 5,000</span>
              </div>
              <div className="relative mb-6">
                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>100</span>
                  <span>5,000</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[500, 1000, 5000].map((amount) => (
                  <button
                    key={amount}
                    className={`py-2 rounded-lg ${
                      stakingAmount === amount
                        ? 'gradient-bg text-white'
                        : 'glass border border-border'
                    }`}
                    onClick={() => setStakingAmount(amount)}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass p-4 rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">You Stake</div>
                <div className="text-xl font-bold">{stakingAmount} BONDI</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">You Earn</div>
                <div className="text-xl font-bold text-gradient">{estimatedRewards} BONDI</div>
              </div>
            </div>
            
            <button className="w-full py-4 rounded-full gradient-bg text-white font-semibold hover:scale-[1.02] transition-transform">
              Connect Wallet to Stake
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-2xl font-bold mb-6">Staking Benefits</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start glass p-6 rounded-2xl"
                whileHover={{ translateX: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-4">
                  <span className="text-white">💰</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Earn Passive Income</h4>
                  <p className="text-muted-foreground">
                    Get up to 12.5% APY on your staked BONDI tokens. Rewards distributed daily.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start glass p-6 rounded-2xl"
                whileHover={{ translateX: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mr-4">
                  <span className="text-white">🗳️</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Governance Rights</h4>
                  <p className="text-muted-foreground">
                    Vote on protocol upgrades, fee structures, and new features.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start glass p-6 rounded-2xl"
                whileHover={{ translateX: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-secondary flex items-center justify-center mr-4">
                  <span className="text-white">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Secure & Trustless</h4>
                  <p className="text-muted-foreground">
                    Audited smart contracts ensure your funds are always safe.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-10 glass p-6 rounded-2xl border border-secondary/20">
              <h4 className="font-bold text-lg mb-3">Total Value Locked</h4>
              <div className="text-3xl font-bold text-gradient mb-2">$2.4M+</div>
              <div className="text-sm text-muted-foreground">
                Secured by Bondi staking contracts
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}