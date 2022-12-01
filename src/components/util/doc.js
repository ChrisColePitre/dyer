import React from "react";

const DocIframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div
    style={{display: 'block',alignContent: 'center',margin: '0 auto', minHeight: '2000px'
    }}>
      <iframe
        // src={"https://docs.google.com/viewer?url=" + src + "&embedded=true"}
        src={ src + "&embedded=true"}
        title="file"
        style={{
            minWidth:'75%',
            maxWidth: '90%',
            height: '1950px'
            
        }}
      ></iframe>
    </div>
  );
};

export default DocIframe;