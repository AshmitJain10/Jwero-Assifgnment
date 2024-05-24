const DataTable = () => {
  return (
    <div className="w-full relative rounded-spacing-4 bg-surface-surface1 h-[819px] overflow-hidden flex flex-col items-start justify-start py-0 px-4 box-border gap-[16px] text-left text-sm text-color-tokens-text-secondary font-xxxl-semibold">
      <div className="self-stretch bg-surface-surface1 flex flex-row items-center justify-between pt-4 px-0 pb-0 text-base">
        <div className="relative">
          <span>Showing</span>
          <span className="font-semibold text-royalblue">
            <span className="text-black">{` `}</span>
            <span>340</span>
            <span className="text-black">{` `}</span>
          </span>
          <span>contacts</span>
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px] text-sm text-text-primary">
          <div className="w-[372px] shadow-[0px_0px_1px_rgba(0,_0,_0,_0.4)] rounded-spacing-2 bg-surface-surface1 overflow-hidden shrink-0 flex flex-row items-center justify-start p-2 box-border gap-[6px] text-xs text-color-tokens-text-secondary">
            <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/search-5-1.svg"
              />
              <div className="relative tracking-[-0.02em]">Search anything</div>
            </div>
            <img
              className="w-4 relative rounded h-4"
              alt=""
              src="/shortcut.svg"
            />
          </div>
          <div className="shadow-[0px_0px_1px_rgba(0,_0,_0,_0.4)] rounded-lg bg-surface-surface1 h-9 flex flex-row items-center justify-center p-2 box-border gap-[4px]">
            <div className="relative tracking-[-0.02em] font-medium">{`Sort by : All `}</div>
            <div className="w-4 relative h-4">
              <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_0px)] flex flex-col items-start justify-start gap-[10px]">
                <img
                  className="w-0 relative h-px object-contain"
                  alt=""
                  src="/arrow-32.svg"
                />
                <img
                  className="w-0 relative h-px object-contain"
                  alt=""
                  src="/arrow-33.svg"
                />
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_1px_rgba(0,_0,_0,_0.5)] rounded-lg bg-surface-surface1 flex flex-row items-center justify-start py-2 px-3 gap-[4px]">
            <div className="h-5 overflow-hidden flex flex-row items-center justify-center">
              <div className="w-5 relative h-5 overflow-hidden shrink-0">
                <div className="absolute top-[3.4px] left-[2.4px] rounded-12xs box-border w-[15.2px] h-[13.2px] border-[1.2px] border-solid border-text-primary" />
                <div className="absolute top-[3.5px] left-[7.5px] box-border w-px h-[13px] border-r-[1px] border-solid border-text-primary" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[-0.02em] leading-[20px] font-semibold">
                Columns
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start text-text-tertiary">
        <div className="w-[283px] flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="relative tracking-[-0.02em] font-medium">
              Contact
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-center text-xs text-text-primary">
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                  <div className="!m-[0] absolute top-[-4px] left-[29px] rounded-81xl bg-surface-surface1 flex flex-col items-center justify-center py-[5px] px-1 z-[1]">
                    <img
                      className="w-[15.4px] relative h-3"
                      alt=""
                      src="/frame-1000002604.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                  <div className="!m-[0] absolute top-[-4px] left-[29px] rounded-81xl bg-surface-surface1 flex flex-col items-center justify-center py-[5px] px-1 z-[1]">
                    <img
                      className="w-[15.4px] relative h-3"
                      alt=""
                      src="/frame-1000002604.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative gap-[10px]">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                  <div className="!m-[0] absolute top-[-4px] left-[29px] rounded-81xl bg-surface-surface1 flex flex-col items-center justify-center py-[5px] px-1 z-[1]">
                    <img
                      className="w-[15.4px] relative h-3"
                      alt=""
                      src="/frame-1000002604.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="flex flex-row items-center justify-start py-0.5 px-0">
                <div className="w-12 rounded-9980xl bg-background-light-blue h-12 flex flex-row items-center justify-center relative">
                  <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                    RS
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2 text-left text-sm">
                  <div className="relative tracking-[-0.02em] font-medium">
                    Rahul Mishra
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="relative tracking-[-0.02em] font-medium">
              Channel
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="w-[185px] box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-start py-spacing-3 px-0 gap-[4px] border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-507@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
              <img
                className="w-5 relative rounded-[50%] h-5 object-cover"
                alt=""
                src="/ellipse-508@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="relative tracking-[-0.02em] font-medium">
              Assigned to
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-center text-3xs text-text-primary">
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="w-7 rounded-9980xl bg-background-light-blue h-7 flex flex-row items-center justify-center relative">
                <div className="w-full absolute !m-[0] h-full top-[0px] left-[0px] font-medium flex items-center justify-center z-[0]">
                  RS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="relative tracking-[-0.02em] font-medium">Stage</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-text-primary">
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="shadow-[0px_0px_0.8px_rgba(0,_0,_0,_0.4)] rounded-md bg-surface-surface1 overflow-hidden flex flex-row items-center justify-start py-1 px-spacing-2">
                <div className="relative tracking-[-0.02em] font-medium">
                  Rahul Shetty
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="relative tracking-[-0.02em] font-medium">
              Last activity
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-text-primary">
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                Today at 2:45 pm
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                Yesterday
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                Yesterday
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                3 days ago
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                Last week
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                Last week
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                4 months ago
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                4 months ago
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                4 months ago
              </div>
            </div>
            <div className="self-stretch box-border h-16 flex flex-col items-start justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <div className="relative tracking-[-0.02em] font-medium">
                4 months ago
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[101px] flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="relative tracking-[-0.02em] font-medium">
              Last activity
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
            <div className="self-stretch box-border h-16 flex flex-row items-center justify-center py-spacing-3 px-0 border-b-[1px] border-solid border-color-tokens-surface-bg-1">
              <img
                className="w-6 relative rounded-spacing-2 h-6 overflow-hidden shrink-0"
                alt=""
                src="/kebab-menu.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-surface-surface1 flex flex-row items-center justify-between pt-3 px-6 pb-4 font-avenir-next-lt-pro">
        <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
          <div className="relative">Display</div>
          <div className="flex flex-col items-center justify-start">
            <div className="w-[70px] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-surface-surface1 flex flex-row items-center justify-start py-2 px-[15px] gap-[8px] border-[1px] border-solid border-color-tokens-surface-bg-1">
                <div className="relative">10</div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--field--chevron-down.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative">Records</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-center gap-[2px] font-xxxl-semibold">
          <div className="w-10 relative rounded-lg bg-color-tokens-surface-bg-1 h-10 overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
              <div className="relative leading-[20px] font-medium">1</div>
            </div>
          </div>
          <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
              <div className="relative leading-[20px] font-medium">2</div>
            </div>
          </div>
          <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
              <div className="relative leading-[20px] font-medium">3</div>
            </div>
          </div>
          <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
              <div className="relative leading-[20px] font-medium">...</div>
            </div>
          </div>
          <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
              <div className="relative leading-[20px] font-medium">10</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[8px]">
          <div className="flex flex-row items-center justify-start">
            <div className="rounded-lg flex flex-row items-start justify-start">
              <div className="rounded-lg bg-surface-surface1 overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 border-[1px] border-solid border-color-tokens-surface-bg-1">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowleft.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="w-12 h-9 object-contain"
            alt=""
            src="/frame-1000005360@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
