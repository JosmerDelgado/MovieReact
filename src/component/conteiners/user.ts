import { Container } from "unstated";
import * as React from "react";
type userState = {
  name: string;
};

class UserContainer extends Container<userState> {
  state = { name: "Josmer" };

  public changeName(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target instanceof HTMLInputElement) {
      this.setState({
        name: event.target.value as string
      });
    }
  }
}

export default UserContainer;
