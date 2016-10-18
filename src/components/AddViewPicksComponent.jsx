import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

const AddViewPicksComponent = (props) => {
  return (
    <section className='view home'>
      <div className='home__background' style={{backgroundImage: 'url(../images/fieldball.jpg)', backgroundPosition: '36% center'}} />
      <div className='home__content home__content--flex'>
        <center>
          <Link style={{width: '100px'}} onClick={(e) => {
            e.preventDefault();
            browserHistory.goBack();
          }} to='/'>
            <img style={{width: '100px'}} src='../images/back_button.png' />
          </Link>

          <h1 className='block__title block__title--centered block__title--white' >
            Add / View Picks
          </h1>

          <table className='pickstable'>
            <tbody>
              <tr className='tableheader'>
                <td></td>
                <td>10</td>
                <td>9</td>
                <td>8</td>
                <td>7</td>
                <td>6</td>
                <td>5</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>PotPts</td>
                <td>Pts</td>
              </tr>
              <tr className='player1'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player2'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player3'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player4'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player5'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player6'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player7'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player8'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player9'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player10'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player11'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
              <tr className='player12'>
                <td>MR</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>No Pick</td>
                <td>0</td>
                <td>55</td>
              </tr>
            </tbody>
          </table>

          <table className='spreadtable'>
            <tbody>
              <tr><td><img className='teamlogo' src='../images/teamlogos/bills.png'/>BUF  @  <img className='teamlogo' src='../images/teamlogos/dolphins.png' />MIA -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/patriots.png'/>NE  @  <img className='teamlogo' src='../images/teamlogos/jets.png' />NYJ -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/ravens.png'/>BAL  @  <img className='teamlogo' src='../images/teamlogos/bengals.png' />CIN -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/browns.jpg'/>CLE  @  <img className='teamlogo' src='../images/teamlogos/steelers.png' />PIT -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/texans.png'/>HOU  @  <img className='teamlogo' src='../images/teamlogos/colts.jpg' />IND -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/jaguars.png'/>JAX  @  <img className='teamlogo' src='../images/teamlogos/titans.png' />TEN -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/broncos.png'/>DEN  @  <img className='teamlogo' src='../images/teamlogos/chiefs.png' />KC -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/raiders.png'/>OAK  @  <img className='teamlogo' src='../images/teamlogos/chargers.png' />SD -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/cowboys.png'/>DAL  @  <img className='teamlogo' src='../images/teamlogos/giants.png' />NYG -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/eagles.png'/>PHI  @  <img className='teamlogo' src='../images/teamlogos/redskins.png' />WAS -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/bears.png'/>CHI  @  <img className='teamlogo' src='../images/teamlogos/lions.png' />DET -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/packers.png'/>GB  @  <img className='teamlogo' src='../images/teamlogos/vikings.png' />MIN -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/falcons.png'/>ATL  @  <img className='teamlogo' src='../images/teamlogos/panthers.png' />CAR -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/saints.png'/>NO  @  <img className='teamlogo' src='../images/teamlogos/bucs.png' />TB -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/cardinals.png'/>ARI  @  <img className='teamlogo' src='../images/teamlogos/rams.png' />LA -1</td></tr>
              <tr><td><img className='teamlogo' src='../images/teamlogos/49ers.png'/>SF  @  <img className='teamlogo' src='../images/teamlogos/seahawks.png' />SEA -1</td></tr>
              </tbody>
          </table>

          <table className='pickedtable'>
            <tbody>
              <tr>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
              </tr>
              <tr>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
                <td>ON 33</td>
              </tr>
            </tbody>
          </table>

        </center>
      </div>
    </section>
  );
} ;

AddViewPicksComponent.propTypes = {
  children: PropTypes.element
};

export default AddViewPicksComponent;
