import React from 'react';
import cider from '../../assets/images/cider.jpg';

const styles = {
  container: {
    overflow: 'hidden',
    padding: '90px 110px'
  },
  image: {
    float: 'right',
    width: '280px',
    margin: '10px 15px 15px 15px',
    border: '1px solid black'
  }
}

function Story(){
  return(
    <div style={styles.container}>
      <style jsx>{`
          .body p{
            font-size: 20px;
            font-family: times;
            line-height: 1.4;
          }
          #flow{
            font-family: cursive;
            font-size: 40px;
            display: in
          }
          #heading{
            font-weight: lighter;
          }
        `}
      </style>
      <h1 id='heading'>Tap and <span id='flow'>Flow</span></h1>
      <span className='body'><p>Curabitizzle phat dizzle ma nizzle nisi its fo rizzle get down get down. Suspendisse . Morbi odio. Boom shackalack neque. Things black. Boofron maurizzle shiznit, interdum a, feugizzle tellivizzle dawg, funky fresh izzle, pede. Pellentesque gravida. Vestibulizzle check it out mi, brizzle boofron, pizzle sizzle, adipiscing sempizzle, velit. Crizzle izzle dang. My shizz volutpizzle dawg vizzle pimpin'. Crizzle owned justo get down get down purus sodales ornare. Gangster da bomb justo fizzle lacus. Dope urna. Suspendisse venenatis break it down lacizzle. Curabitizzle rizzle ante. Nunc pharetra, for sure eu dapibizzle hendrerizzle, ipsizzle shizznit elementizzle sizzle, shizzle my nizzle crocodizzle aliquizzle the bizzle felis shut the shizzle up pede. Shut the shizzle up a nisl. Class aptent taciti own yo' ad litora torquent per conubia fo shizzle, pizzle ghetto mofo. Aliquizzle interdum, dawg nizzle elementum nonummy, shit shit leo, in ghetto risus arcu dawg sizzle.</p><img style={styles.image} src={cider}/>
      <p>Fo shizzle mah nizzle fo rizzle, mah home g-dizzle crunk elizzle. Duis black, gizzle sed, ornare you son of a bizzle, porttitizzle ac, tellizzle. Proin sizzle gangster. Cras dawg mi owned nibh. Pellentesque yippiyo break yo neck, yall felizzle. Donec owned izzle fo shizzle mofo. Etizzle dope check it out sure. Ut shizzlin dizzle. Sizzle nisl metizzle, pot izzle, eleifend sizzle, crazy vizzle, nisi. Vivamizzle vulputate consectetizzle crazy.</p>
      <p>Shut the shizzle up a nisl. Class aptent taciti own yo ad litora torquent per conubia fo shizzle, pizzle ghetto mofo. Aliquizzle interdum, dawg nizzle elementum nonummy, shit shit leo, in ghetto risus arcu dawg sizzle. </p>
      <p>Vivamizzle dawg yo egizzle pimpin' consectetizzle mah nizzle. Vivamus crazy amizzle fizzle. Nizzle mofo nisl eget lacizzle check out this feugizzle. Dawg suscipit viverra ipsum. Phat check it out arcu. Vestibulizzle shiz for sure, auctor sed, izzle eu, own yo' nizzle, yippiyo. Nullizzle hizzle sizzle ghetto fo shizzle shut the shizzle up pharetra. Quisque pede tortizzle, congue , auctizzle we gonna chung, mollis sit amizzle, daahng dawg. Donizzle uhuh ... yih! crackalackin. Aliquizzle risizzle dang, mah nizzle consectetizzle, funky fresh boofron, owned fizzle, turpizzle. Quisque a ipsizzle eu mi break yo neck, yall vehicula. Curabitur boom shackalack that's the shizzle ipsum. Pellentesque go to hizzle morbi cool senectizzle shut the shizzle up netizzle et fo shizzle pizzle izzle tellivizzle egestizzle. Shiznit est. Curabitur elementizzle. Izzle erizzle felis, semper mammasay mammasa mamma oo sa, suscipizzle crazy, porta pulvinar, nisl. Break yo neck, yall sagittizzle hizzle velit.</p>
      <p><em>— Josh and Layne, Founders, Tap and Flow Brewing Company</em></p></span>
    </div>
  );
}
export default Story;
