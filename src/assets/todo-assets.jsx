export function TodoLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      {...props}
    >
      <path
        fill="#eab308"
        d="M7.875 0a1 1 0 0 0-.656.375L3.812 4.656l-2.25-1.5A1.014 1.014 0 1 0 .438 4.844l3 2a1 1 0 0 0 1.344-.219l4-5A1 1 0 0 0 7.875 0zM12 3v2h14V3H12zM7.875 9a1 1 0 0 0-.656.375l-3.407 4.281l-2.25-1.5a1.014 1.014 0 1 0-1.125 1.688l3 2a1 1 0 0 0 1.344-.219l4-5A1 1 0 0 0 7.875 9zM12 12v2h14v-2H12zm-4.125 6a1 1 0 0 0-.656.375l-3.407 4.281l-2.25-1.5a1.014 1.014 0 1 0-1.125 1.688l3 2a1 1 0 0 0 1.344-.219l4-5A1 1 0 0 0 7.875 18zM12 21v2h14v-2H12z"
      />
    </svg>
  );
}

export function TodoAdd(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#40BA50"
        fill-rule="evenodd"
        d="M13 6a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V.75a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 6ZM3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function TodoEdit(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#1373EA"
        d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"
      />
    </svg>
  );
}
