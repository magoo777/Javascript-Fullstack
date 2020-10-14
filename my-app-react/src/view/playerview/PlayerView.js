import React from 'react';

// Player Components
import PlayerComp from '../../components/PlayerComp/Player';
import Overview from '../../components/PlayerOverviewComp/Overview';
import Performance from '../../components/PlayerPerfComp/Performance';

function PlayerView() {
    return (
        <div>
            <PlayerComp />
            <Overview />
            <Performance />
        </div>
    )
}

export default PlayerView
