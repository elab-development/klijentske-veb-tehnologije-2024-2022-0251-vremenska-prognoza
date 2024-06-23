const Logo = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="125"
      height="33"
      viewBox="0 0 125 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.3949 25L26.4688 7.54545H29.8693L33.0142 20.3722H33.1761L36.5341 7.54545H39.6278L42.9943 20.3807H43.1477L46.2926 7.54545H49.6932L44.767 25H41.6477L38.1534 12.7528H38.017L34.5142 25H31.3949ZM56.2088 25.2557C54.8963 25.2557 53.7628 24.983 52.8082 24.4375C51.8594 23.8864 51.1293 23.108 50.6179 22.1023C50.1065 21.0909 49.8509 19.9006 49.8509 18.5312C49.8509 17.1847 50.1065 16.0028 50.6179 14.9858C51.1349 13.9631 51.8565 13.1676 52.7827 12.5994C53.7088 12.0256 54.7969 11.7386 56.0469 11.7386C56.8537 11.7386 57.6151 11.8693 58.331 12.1307C59.0526 12.3864 59.6889 12.7841 60.2401 13.3239C60.7969 13.8636 61.2344 14.5511 61.5526 15.3864C61.8707 16.2159 62.0298 17.2045 62.0298 18.3523V19.2983H51.2997V17.2188H59.0724C59.0668 16.6278 58.9389 16.1023 58.6889 15.642C58.4389 15.1761 58.0895 14.8097 57.6406 14.5426C57.1974 14.2756 56.6804 14.142 56.0895 14.142C55.4588 14.142 54.9048 14.2955 54.4276 14.6023C53.9503 14.9034 53.5781 15.3011 53.3111 15.7955C53.0497 16.2841 52.9162 16.821 52.9105 17.4062V19.2216C52.9105 19.983 53.0497 20.6364 53.3281 21.1818C53.6065 21.7216 53.9957 22.1364 54.4957 22.4261C54.9957 22.7102 55.581 22.8523 56.2514 22.8523C56.7003 22.8523 57.1065 22.7898 57.4702 22.6648C57.8338 22.5341 58.1491 22.3438 58.4162 22.0938C58.6832 21.8438 58.8849 21.5341 59.0213 21.1648L61.902 21.4886C61.7202 22.25 61.3736 22.9148 60.8622 23.483C60.3565 24.0455 59.7088 24.483 58.919 24.7955C58.1293 25.1023 57.2259 25.2557 56.2088 25.2557ZM68.407 25.2642C67.5774 25.2642 66.8303 25.1165 66.1655 24.821C65.5064 24.5199 64.9837 24.0767 64.5973 23.4915C64.2166 22.9062 64.0263 22.1847 64.0263 21.3267C64.0263 20.5881 64.1626 19.9773 64.4354 19.4943C64.7081 19.0114 65.0803 18.625 65.5518 18.3352C66.0234 18.0455 66.5547 17.8267 67.1456 17.679C67.7422 17.5256 68.3587 17.4148 68.995 17.3466C69.7621 17.267 70.3842 17.196 70.8615 17.1335C71.3388 17.0653 71.6854 16.9631 71.9013 16.8267C72.1229 16.6847 72.2337 16.4659 72.2337 16.1705V16.1193C72.2337 15.4773 72.0433 14.9801 71.6626 14.6278C71.282 14.2756 70.7337 14.0994 70.0178 14.0994C69.2621 14.0994 68.6626 14.2642 68.2195 14.5938C67.782 14.9233 67.4865 15.3125 67.3331 15.7614L64.4524 15.3523C64.6797 14.5568 65.0547 13.892 65.5774 13.358C66.1001 12.8182 66.7393 12.4148 67.495 12.1477C68.2507 11.875 69.0859 11.7386 70.0007 11.7386C70.6314 11.7386 71.2592 11.8125 71.8842 11.9602C72.5092 12.108 73.0803 12.3523 73.5973 12.6932C74.1143 13.0284 74.5291 13.4858 74.8416 14.0653C75.1598 14.6449 75.3189 15.3693 75.3189 16.2386V25H72.353V23.2017H72.2507C72.0632 23.5653 71.799 23.9062 71.4581 24.2244C71.1229 24.5369 70.6996 24.7898 70.1882 24.983C69.6825 25.1705 69.0888 25.2642 68.407 25.2642ZM69.2081 22.9972C69.8274 22.9972 70.3643 22.875 70.8189 22.6307C71.2734 22.3807 71.6229 22.0511 71.8672 21.642C72.1172 21.233 72.2422 20.7869 72.2422 20.304V18.7614C72.1456 18.8409 71.9808 18.9148 71.7479 18.983C71.5206 19.0511 71.2649 19.1108 70.9808 19.1619C70.6967 19.2131 70.4155 19.2585 70.1371 19.2983C69.8587 19.3381 69.6172 19.3722 69.4126 19.4006C68.9524 19.4631 68.5405 19.5653 68.1768 19.7074C67.8132 19.8494 67.5263 20.0483 67.3161 20.304C67.1058 20.554 67.0007 20.8778 67.0007 21.2756C67.0007 21.8438 67.2081 22.2727 67.6229 22.5625C68.0376 22.8523 68.5661 22.9972 69.2081 22.9972ZM84.9581 11.9091V14.2955H77.4325V11.9091H84.9581ZM79.2905 8.77273H82.3757V21.0625C82.3757 21.4773 82.4382 21.7955 82.5632 22.017C82.6939 22.233 82.8643 22.3807 83.0746 22.4602C83.2848 22.5398 83.5178 22.5795 83.7734 22.5795C83.9666 22.5795 84.1428 22.5653 84.3018 22.5369C84.4666 22.5085 84.5916 22.483 84.6768 22.4602L85.1967 24.8722C85.032 24.929 84.7962 24.9915 84.4893 25.0597C84.1882 25.1278 83.8189 25.1676 83.3814 25.179C82.6087 25.2017 81.9126 25.0852 81.2933 24.8295C80.674 24.5682 80.1825 24.1648 79.8189 23.6193C79.4609 23.0739 79.2848 22.392 79.2905 21.5739V8.77273ZM90.9048 17.3295V25H87.8196V7.54545H90.8366V14.1335H90.9901C91.2969 13.3949 91.7713 12.8125 92.4134 12.3864C93.0611 11.9545 93.8849 11.7386 94.8849 11.7386C95.794 11.7386 96.5866 11.929 97.2628 12.3097C97.9389 12.6903 98.4616 13.2472 98.831 13.9801C99.206 14.7131 99.3935 15.608 99.3935 16.6648V25H96.3082V17.142C96.3082 16.2614 96.081 15.5767 95.6264 15.0881C95.1776 14.5937 94.5469 14.3466 93.7344 14.3466C93.1889 14.3466 92.7003 14.4659 92.2685 14.7045C91.8423 14.9375 91.5071 15.2756 91.2628 15.7188C91.0241 16.1619 90.9048 16.6989 90.9048 17.3295ZM108.334 25.2557C107.021 25.2557 105.888 24.983 104.933 24.4375C103.984 23.8864 103.254 23.108 102.743 22.1023C102.232 21.0909 101.976 19.9006 101.976 18.5312C101.976 17.1847 102.232 16.0028 102.743 14.9858C103.26 13.9631 103.982 13.1676 104.908 12.5994C105.834 12.0256 106.922 11.7386 108.172 11.7386C108.979 11.7386 109.74 11.8693 110.456 12.1307C111.178 12.3864 111.814 12.7841 112.365 13.3239C112.922 13.8636 113.359 14.5511 113.678 15.3864C113.996 16.2159 114.155 17.2045 114.155 18.3523V19.2983H103.425V17.2188H111.197C111.192 16.6278 111.064 16.1023 110.814 15.642C110.564 15.1761 110.214 14.8097 109.766 14.5426C109.322 14.2756 108.805 14.142 108.214 14.142C107.584 14.142 107.03 14.2955 106.553 14.6023C106.075 14.9034 105.703 15.3011 105.436 15.7955C105.175 16.2841 105.041 16.821 105.036 17.4062V19.2216C105.036 19.983 105.175 20.6364 105.453 21.1818C105.732 21.7216 106.121 22.1364 106.621 22.4261C107.121 22.7102 107.706 22.8523 108.376 22.8523C108.825 22.8523 109.232 22.7898 109.595 22.6648C109.959 22.5341 110.274 22.3438 110.541 22.0938C110.808 21.8438 111.01 21.5341 111.146 21.1648L114.027 21.4886C113.845 22.25 113.499 22.9148 112.987 23.483C112.482 24.0455 111.834 24.483 111.044 24.7955C110.254 25.1023 109.351 25.2557 108.334 25.2557ZM116.765 25V11.9091H119.756V14.0909H119.893C120.131 13.3352 120.54 12.7528 121.12 12.3438C121.705 11.929 122.373 11.7216 123.123 11.7216C123.293 11.7216 123.484 11.7301 123.694 11.7472C123.91 11.7585 124.089 11.7784 124.231 11.8068V14.6449C124.1 14.5994 123.893 14.5597 123.609 14.5256C123.33 14.4858 123.06 14.4659 122.799 14.4659C122.237 14.4659 121.731 14.5881 121.282 14.8324C120.839 15.071 120.489 15.4034 120.234 15.8295C119.978 16.2557 119.85 16.7472 119.85 17.304V25H116.765Z"
        fill="currentColor"
      />
      <path
        d="M16.5 -7.21238e-07C12.1239 -5.29954e-07 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 -5.82138e-07 12.1239 -7.21238e-07 16.5C-8.60338e-07 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33L16.5 16.5L16.5 -7.21238e-07Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
