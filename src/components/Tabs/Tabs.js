import { useState } from 'react';
import TabButtons from './TabButtons';
import TabContent from './TabContent';

export default function Tabs(){

    const[activeTab, setActiveTab] = useState(0);
    
    let tabData = [
        {name: 'Tab 1', content: 'Tab 1 content'},
        {name: 'Tab 2', content: 'Tab 2 content'},
        {name: 'Tab 3', content: 'Tab 3 content'}
    ];

    return (
        <>
            <TabButtons tabData={tabData} setActiveTab={setActiveTab} />
            <TabContent tabData={tabData} activeTab={activeTab} />
        </>
    )
}