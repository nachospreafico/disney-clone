const Banner = () => {
  return (
    <section className="px-2 py-1 grid md:grid-cols-6 md:grid-rows-1 w-[88vw] grid-cols-3 grid-rows-2 ml-auto mr-auto gap-6">
      <div className="relative overflow-hidden cursor-pointer flex items-center justify-center shadow-2xl hover:border-gray-100 hover:scale-110 duration-150 ease-in border-transparent border-[3px] h-fit rounded-[4px] bg-[#292B36]">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png"
          className="w-full"
        ></img>
        <video
          className="absolute z-[-1] w-[320px] h-[240px]"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="overflow-hidden relative cursor-pointer flex items-center justify-center shadow-2xl hover:border-gray-100 hover:scale-110 duration-150 ease-in  border-transparent border-[3px] h-fit rounded-[4px] bg-[#292B36]">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=400&aspectRatio=1.78&format=png"></img>
        <video
          className="absolute z-[-1] w-[320px] h-[240px]"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="overflow-hidden relative cursor-pointer flex items-center justify-center shadow-2xl hover:border-gray-100 hover:scale-110 duration-150  ease-in border-transparent border-[3px] h-fit rounded-[4px] bg-[#292B36]">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=400&aspectRatio=1.78&format=png"></img>
        <video
          className="absolute z-[-1] w-[320px] h-[240px]"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="relative overflow-hidden  cursor-pointer flex items-center justify-center shadow-2xl hover:border-gray-100 hover:scale-110 duration-150 ease-in  border-transparent border-[3px] h-fit rounded-[4px] bg-[#292B36]">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png"></img>
        <video
          className="absolute z-[-1] w-[320px] h-[240px]"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229455-star-wars.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className=" relative overflow-hidden cursor-pointer flex items-center justify-center shadow-2xl hover:border-gray-100 hover:scale-110 duration-150 ease-in  border-transparent border-[3px] h-fit rounded-[4px] bg-[#292B36]">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=400&aspectRatio=1.78&format=png"></img>
        <video
          className="absolute z-[-1] w-[320px] h-[240px]"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="relative overflow-hidden cursor-pointer flex items-center justify-center shadow-2xl hover:border-gray-100 hover:scale-110 duration-150 ease-in  border-transparent border-[3px] h-fit rounded-[4px] bg-[#292B36]">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE893BCDD6264C4A876C03A0DE5004D9F394BE1E8388F085431318CDCEC9A598/scale?width=400&aspectRatio=1.78&format=png"></img>
        <video
          className="absolute z-[-1] w-[320px] h-[240px]"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608169994-brand-star.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </section>
  );
};

export default Banner;
