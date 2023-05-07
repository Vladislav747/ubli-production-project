import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({className}: ISidebarProps) => {

    const handleToggle = () => {
        setCollapsed(prev =>!prev);
    }

    const [collapse, setCollapsed] = useState(false);
    return (
        <div className={classNames (cls.navbar, {[cls.collapsed]: collapse}, [className])}>
<button onClick={handleToggle}>toggle</button>
        </div>
    );
};
