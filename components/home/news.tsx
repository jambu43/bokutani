import React from 'react'

function news() {
  return (
    <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h4 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-[#0ba0da]">ACTUS</span> <span className="text-black">Bokutani</span>
            </h4>
            <p className="text-gray-700 text-lg">Suivez les dernières événements et mises à jours de nos jeux.</p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://2405525.fs1.hubspotusercontent-na1.net/hubfs/2405525/Horizon_Image_009%20%282%29-1.png"
                  alt="Patch Note 1.6.4"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[#0ba0da] font-bold text-sm">BLOG</span>
                <h5 className="text-2xl font-black text-black">PATCH NOTE 1.6.4</h5>
                <p className="text-gray-600">Patch note 1.6.4 - Nouvelles features et correctifs</p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://2405525.fs1.hubspotusercontent-na1.net/hubfs/2405525/banner%20patch%20note-2.png"
                  alt="Patch Note 1.6.3 & 0.5.11"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[#0ba0da] font-bold text-sm">BLOG</span>
                <h5 className="text-2xl font-black text-black">PATCH NOTE 1.6.3 & 0.5.11</h5>
                <p className="text-gray-600">Patch note 1.6.3 & 0.5.11 - Nouvelles features et correctifs</p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://2405525.fs1.hubspotusercontent-na1.net/hubfs/2405525/banner%20patch%20note-2.png"
                  alt="Patch Note 1.6.2"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[#0ba0da] font-bold text-sm">BLOG</span>
                <h5 className="text-2xl font-black text-black">PATCH NOTE 1.6.2</h5>
                <p className="text-gray-600">Patch note 1.6.2 - Nouvelles features et correctifs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default news
