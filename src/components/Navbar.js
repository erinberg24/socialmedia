import React from 'react';
import css from './Navbar.module.css';
import publicUrl from '/Users/courtneypeterson/Desktop/social-media-erinberg24/src/utils/publicUrl.js';

function Navbar() {

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button>
                    <img src={publicUrl('/assets/home.svg')} alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button>
                    <img src={publicUrl('/assets/explore.svg')} alt="Explore"/>
                </button>
            </div>
						...
        </nav>
    );
}

export default Navbar;