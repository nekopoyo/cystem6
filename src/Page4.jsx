import React from "react";
import ReactDOM from "react-dom";
import { Page, Toolbar, ToolbarButton, Icon } from "react-onsenui";
export default class Page4 extends React.Component {
  render() {
  return (
    <Toolbar>
      <div className="left">
        <ToolbarButton onClick={this.props.show}>
          <Icon icon="md-menu" />
        </ToolbarButton>
      </div>
      <div className="center">ページ4</div>
    </Toolbar>
  );
}
}