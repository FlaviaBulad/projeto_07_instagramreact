import Copyright from "./Copyright";
import Links from "./Links";
import FundoMobile from "./MobileBackground";
import Suggestions from "./Suggestions";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="../assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>
            <Suggestions />
            <Links />
            <Copyright />
            <FundoMobile />
        </div>
    );
}









