import { useState } from 'react';

import { ITabberProps } from '@renderer/components/Tabber/Tabber.types';

import TabsTabber from '../Tabs/TabsTabber';

function RenderNetwork(props: ITabberProps) {
  const [selectedTab, setSelectedTab] = useState('');

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return props.socialList.map((socialItem) => (
    <div key={socialItem.id}>
      <TabsTabber
        socialItem={socialItem}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
    </div>
  ));
}

export default RenderNetwork;
