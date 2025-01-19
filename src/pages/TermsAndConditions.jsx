import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className="w-full mt-20">
      <div className='mx-auto flex flex-col space-x-3 justify-center items- md:w-[70%] p-5 my-5 text-gray-700'>
        <h1 className="p-5 text-2xl font-bold">Lily Terms & Condition</h1>
        <div className='flex flex-col space-y-4 p-5 rounded-lg shadow-md bg-gray-100 tracking-wide leading-normal '>
          {/* Effective : 2025 */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Effective : 2025</p>
            <p>Welcome to Lily, a revolutionary AI-powered chatbot designed to help businesses provide exceptional customer support. These Terms and Conditions ("Terms") govern your use of the Lily platform, including the website, dashboard, and chatbot interface.</p>
          </div>

          {/* Introduction */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">1. Introduction</p>
            <div className="flex flex-col">
              <p>
                1.1. These Terms are a binding contract between you ("Customer") and Lily ("we" or "us").
              </p>
              <p> 1.2. By using the Lily platform, you agree to be bound by these Terms.</p>
              <p>1.3. If you do not agree to these Terms, please do not use the Lily platform.</p>
            </div>
          </div>

          {/* Definations */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">2. Definations</p>
            <div className="flex flex-col">
              <p>
                2.1. "Lily Platform" means the website, dashboard, and chatbot interface provided by Lily.
              </p>
              <p>
                2.2. "Customer Data" means any data, including text, images, and other materials, that you upload or transmit to the Lily Platform.
              </p>
              <p>2.3. "Chatbot" means the AI-powered chatbot provided by Lily as part of the Lily Platform.</p>
            </div>
          </div>

          {/* Use of the Lily Platforms */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">3. Use of the Lily Platform</p>
            <div className="flex flex-col">
              <p>
                3.1. You may use the Lily Platform only for lawful purposes and in accordance with these Terms.
              </p>
              <p>
                3.2. You are responsible for ensuring that your use of the Lily Platform complies with all applicable laws and regulations.
              </p>
              <p> 3.3. You may not use the Lily Platform to upload or transmit any Customer Data that is obscene, defamatory, or otherwise objectionable.</p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">
              4. Intellectual Property</p>
            <div className="flex flex-col">
              <p>
                4.1. The Lily Platform, including the website, dashboard, and chatbot interface, is owned and operated by NexusMind
              </p>
              <p>
                4.2. All intellectual property rights in the Lily Platform, including copyrights, trademarks, and trade secrets, are owned by Lily.
              </p>
              <p> 4.3. You may not reproduce, modify, or distribute any part of the Lily Platform without our prior written consent.</p>
            </div>
          </div>

          {/* Customer Data */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">5. Customer Data</p>
            <div className="flex flex-col">
              <p>
                5.1. You are responsible for ensuring that your Customer Data is accurate, complete, and up-to-date
              </p>
              <p>
                5.2. You grant us a non-exclusive, royalty-free license to use, reproduce, and distribute your Customer Data as necessary to provide the Lily Platform.
              </p>
              <p> 5.3. We may use your Customer Data to improve the Lily Platform and to provide you with support and maintenance services.</p>
            </div>
          </div>

          {/* Support and Maintanance */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">6. Support and Maintenance</p>
            <div className="flex flex-col">
              <p>
                6.1. We will provide you with support and maintenance services for the Lily Platform, including updates, bug fixes, and technical assistance.
              </p>
              <p>
                6.2. We may suspend or terminate your access to the Lily Platform if you fail to comply with these Terms or if we determine that your use of the Lily Platform is causing harm to us or others.
              </p>
            </div>
          </div>

          {/* Disclaimer of Warranties*/}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">7. Disclaimer of Warranties</p>
            <div className="flex flex-col">
              <p>
                7.1. The Lily Platform is provided "as is" and "as available" without warranties of any kind.
              </p>
              <p>7.2. We disclaim all warranties, express or implied, including the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            </div>
          </div>

          {/*Limitation of Liability*/}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">8. Limitation of Liability</p>
            <div className="flex flex-col">
              <p>
                8.1. We will not be liable for any damages, including direct, indirect, incidental, special, or consequential damages, arising out of or related to your use of the Lily Platform.
              </p>
              <p>8.2. Our liability for damages will be limited to the amount of fees paid by you to us in the 12 months preceding the event giving rise to the claim.
              </p>
            </div>
          </div>

          {/*Governing Law*/}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">9. Governing Law</p>
            <div className="flex flex-col">
              <p>
                9.1. These Terms will be governed by and construed in accordance with the laws of the State of California, Nigeria and the United States.
              </p>
              <p>9.2. Any disputes arising out of or related to these Terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </div>
          </div>

          {/*Changes to these Terms*/}
          <div className="flex flex-col space-y-2">
            <p className="font-bold">10. Changes to these Terms</p>
            <div className="flex flex-col">
              <p>
                10.1. We may modify these Terms at any time without notice to you.
              </p>
              <p>10.2. Your continued use of the Lily Platform after any modification to these Terms will constitute your acceptance of the modified Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions

