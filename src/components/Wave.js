import React from "react"

const Wave = () => {
  return (
    <svg
      height="140"
      width="100%"
      fill="none"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="white" width="100%">
        <animate
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="10s"
          values="M0 0C957.493 88.858 1255.52 89.1451 1357 0V140H0V0Z;
                    M0 0C598.293 100.232 846.934 102.082 1357 0V140H0V0Z;
                    M0 0C21.1942 92.5549 359.22 95.5945 1357 0V140H0V0Z;
                    M0 0C957.493 88.858 1255.52 89.1451 1357 0V140H0V0Z
            "
        />
      </path>
    </svg>
  )
}

export default Wave
