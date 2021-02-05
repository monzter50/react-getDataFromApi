import React from "react";

function Icon(props) {
    const {colorSvg} = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="116"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 512 116"
    >
      <path style={{fill:colorSvg}} d="M255.42 28.976c-19.993 0-34.408 13.039-34.408 32.597 0 19.559 16.226 32.598 36.22 32.598 12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.218 6.338-15.466 6.338-8.674 0-16.045-4.527-18.78-11.771h50.744c.399-2.029.634-4.13.634-6.339 0-19.54-14.415-32.58-34.409-32.58zM238.29 55.235c2.263-7.226 8.457-11.772 17.113-11.772 8.675 0 14.869 4.546 17.114 11.772H238.29zm212.138-26.26c-19.993 0-34.409 13.04-34.409 32.598 0 19.559 16.226 32.598 36.22 32.598 12.079 0 22.727-4.781 29.32-12.84l-13.855-8.004c-3.658 4.002-9.217 6.338-15.465 6.338-8.675 0-16.046-4.527-18.78-11.771H484.2c.399-2.029.634-4.13.634-6.339 0-19.54-14.415-32.58-34.408-32.58zm-17.114 26.26c2.264-7.226 8.457-11.772 17.114-11.772 8.674 0 14.868 4.546 17.113 11.772h-34.227zm-70.683 6.338c0 10.866 7.1 18.11 18.11 18.11 7.461 0 13.057-3.386 15.937-8.91l13.908 8.023c-5.759 9.598-16.552 15.375-29.845 15.375-20.011 0-34.408-13.04-34.408-32.598s14.415-32.597 34.408-32.597c13.293 0 24.068 5.777 29.845 15.375l-13.908 8.023c-2.88-5.524-8.476-8.91-15.937-8.91-10.992 0-18.11 7.243-18.11 18.11zM512 9.055V92.36h-16.299V9.055H512zM66.916 0l66.915 115.903H0L66.916 0zm167.298 9.055l-50.182 86.927-50.183-86.927h18.817l31.366 54.33 31.366-54.33h18.816zm106.685 21.732v17.548c-1.811-.525-3.73-.887-5.795-.887-10.522 0-18.11 7.244-18.11 18.11V92.36h-16.299V30.787h16.299v16.66c0-9.2 10.703-16.66 23.905-16.66z"></path>
    </svg>
  );
}

export default Icon;
