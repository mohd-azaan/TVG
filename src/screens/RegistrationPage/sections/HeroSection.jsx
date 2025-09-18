
const imgGroup = "http://localhost:3845/assets/d230ca1d6b764f5d8b3db692c524015d9597e87f.svg";
const imgVector = "http://localhost:3845/assets/055c39ab8d25d54bc5a606ccafb013e90b0a2731.svg";
const imgVector1 = "http://localhost:3845/assets/555294d2bd71056770063a68ff71175764b452f7.svg";
const imgVector2 = "http://localhost:3845/assets/660b5111503e1fcd4bc9a0af0bb5e4171f7753d5.svg";

export const HeroSection = () => {
  return (
    <div className="bg-[#272727] relative w-full h-[591px]" data-name="Hero" data-node-id="3059:3548">
      <div className="absolute bg-[#006f33] h-[335px] left-0 top-[558px] w-full" data-node-id="3059:3549" />
      <div className="absolute h-[1080px] w-[1920px] top-0 left-0 overflow-hidden">
        <div
          className="absolute w-[2102.03px] h-[1454.19px] top-[431.51px] left-[341.98px] transform rotate-[348.05deg]"
          data-name="Shape14 2"
          data-node-id="3059:3550"
        >
          <div className="absolute w-[1888.04px] h-[931.39px] left-[116.38px] top-[363.78px]" data-name="Group" data-node-id="3059:3551">
            <div className="absolute w-full h-full" data-name="Layer 1" data-node-id="3059:3552">
              <div className="absolute w-full h-full mix-blend-screen" data-name="Group" data-node-id="3059:3553">
                <div className="absolute w-full h-full mix-blend-screen" data-name="Group" data-node-id="3059:3554">
                  <img alt="background shape" className="block max-w-none size-full" src={imgGroup} />
                </div>
              </div>
              <div className="absolute w-[701.15px] h-[328.39px] left-[611.98px] top-[478.69px]" data-name="Group" data-node-id="3059:3596">
                <div className="absolute w-[687.98px] h-[275.11px] left-0 top-[165.36px] mix-blend-screen">
                  <div className="relative w-[165.5px] h-[669.74px] transform -rotate-[82.33deg] translate-x-[256.13px] -translate-y-[253.43px]">
                    <div className="relative size-full" data-name="Vector" data-node-id="3059:3597">
                      <img alt="background shape" className="block max-w-none size-full" src={imgVector} />
                    </div>
                  </div>
                </div>
                <div className="absolute w-[445.7px] h-[191.1px] left-[119.88px] top-[147.8px] mix-blend-screen">
                  <div className="relative w-[120.66px] h-[431.6px] transform -rotate-[82.33deg] translate-x-[155.47px] -translate-y-[155.47px]">
                    <div className="relative size-full" data-name="Vector" data-node-id="3059:3598">
                      <img alt="background shape" className="block max-w-none size-full" src={imgVector1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[1285.15px] h-[654.26px] left-[399.13px] top-[450.51px]" data-name="Vector" data-node-id="3059:3599">
                <img alt="background shape" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-start justify-start top-[323px] left-1/2 -translate-x-1/2" data-name="Text box" data-node-id="3059:3600" style={{ left: "calc(50% + 130px)" }}>
        <p className="font-gilroy text-xl leading-7 text-[#dedede] w-[800px]" data-node-id="3059:3601">
          Membership at TVG is limited to just 96 individuals each year. Secure your place today and enjoy full benefits, including exclusive partner access for your first year.
        </p>
      </div>
      <p className="absolute font-morganite text-[110px] leading-[100px] left-[280px] text-white top-[296px] tracking-[2.2px] uppercase w-[655px]" data-node-id="3059:3602">
        Join The 96
      </p>
    </div>
  );
}
