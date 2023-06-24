import React from "react";
import './SubNavbar.css';

function SubNavbar({ matches, item }: { matches: string, item: string[] }) {
    return (
        <div>
            <div className="nav-border">
                <div className="d-flex">
                    <div className="nav-bar-text d-flex">
                        {item.map(each => (
                            <div className="navBar ">
                               <a className="navbar-link nav-border-bottom" href="">{each}</a> 
                                <p className="nav-border-bottom"></p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )

}

export default SubNavbar;