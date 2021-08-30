import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GuestRoutes from "routes/guest";
import LoggedRoutes from "routes/logged";
import "assets/scss/styles.scss";
import LoginPage from 'pages/login'
import Homepage from 'pages/homepage'
import DetailTeam from 'pages/detail-team'
import HelpPage from 'pages/help';
import LearnScora from 'components/help/parts/menu/learn-scora';
import ListEvent from 'components/list-event'
import ForgotPass from 'components/forgot-password'
import ChangePass from 'components/change-password'
const Routes = () => {
    return (
        <>
            <Switch>
                {/* login routes */}
                <LoggedRoutes exact path="/" component={Homepage} />
                <LoggedRoutes exact path="/detail/team/:name" component={DetailTeam} />
                <LoggedRoutes exact path="/help" component={HelpPage} ishelp={true} />
                <LoggedRoutes exact path="/help/learn-scora" component={LearnScora} ishelp={true} />
                <LoggedRoutes exact path="/list-event" component={ListEvent} header={false} />
                <LoggedRoutes exact path="/forgotpass-logged" component={ChangePass} withOutHeader={true} />
                {/* login routes */}

                {/* guest routes */}
                <GuestRoutes exact path="/forgotpass" component={ForgotPass} />
                <GuestRoutes exact path="/login" component={LoginPage} />
                {/* guest routes */}
            </Switch>
        </>
    )
}

export default Routes;