import React from 'react'
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <aside className={s.sidebar}>
            {
                props.posts.map(p => <div key={p.id} className={s.sidebarItem}>
                        <NavLink to={'/content/' + p.id}>
                            <span>{p.id}</span>.
                            <span className={s.textTitle}>{p.title}</span>
                        </NavLink>
                    </div>
                )}
        </aside>
    )
}

export default Sidebar
