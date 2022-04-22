import { SearchIcon, HomeIcon } from '@heroicons/react/outline'

function Footer() {
  return (
    <div className="sm:hidden">
      <div className="fixed inset-x-0 bottom-0 z-10 block border-t bg-white shadow">
        <div className="mx-10 flex  items-center justify-between p-2 ">
          <HomeIcon className="relative inline-flex h-6 cursor-pointer " />
          <SearchIcon className=" relative inline-flex h-6 cursor-pointer " />

          <img
            src="https://previews.dropbox.com/p/thumb/ABcRaVtFtFJ7DeV9F-MSI4As2pk3ZWymfF6pidN_WLEsRBcamsQeID--41AwZ3En3MxcSFzV9z_HU8qQ6bdO1DsFu65N-Kf-x_6m3hQGIdANQVb4zTxmDCQRWFa4iYYnSw4lzFdkjjeytRH7yYZEKOv8_bZWnlt4wAurpwSOfnO8iZ0ESzQRXqkSB6uwHx1Na2Jim6-F7_d4ZtUEqiJcz_GEAgM-NIpMXhBboruqX3XchAVvMWZQksAQ9bNfUjqo1nXdBBpFE3OsCdMLzUezt_R23aVHT-TK1eHcb49V9Ve9EC8wtcokxZC4N_jw_DJneHGXRsi2OOoKAl9tSQrXHgsTzqpsUofxqCiOJ1YsxJStcw/p.jpeg"
            alt=""
            className=" inline-flex h-10 w-10 cursor-pointer  rounded-full"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
