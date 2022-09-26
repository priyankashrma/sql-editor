import React, { Fragment } from "react";

import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const styles = {
  root: {
    minHeight: "180px",
    boxSizing: "border-box",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain,
  },
};

const SQLEditor = ({ sql, setSql }) => {
  const onValueChange = (query) => {
    setSql(query);
  };

  const highlight = (query) => (
    <Highlight {...defaultProps} theme={theme} code={query} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );
  return (
    <Editor
      value={sql}
      onValueChange={onValueChange}
      highlight={highlight}
      padding={10}
      style={styles.root}
    />
  );
};

export default SQLEditor;

