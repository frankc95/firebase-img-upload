import React from "react";
import { Container, Row, col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactForm } from "./ContactForm";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Router>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route exact path="/" component={ContactForm} />
            {/* <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} /> */}
          </Switch>
        </Router>
      </Row>
    </Container>
  );
}

export default App;
