import react from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { cardDataAtom } from './atoms';

export default function ProfileCard(){
    
    const githubData = useRecoilValue(cardDataAtom)
    
    return(
      <RecoilRoot>
      <div className=' flex'>
        <div>
          <img className=' rounded-3xl w-48' src={githubData.avatar_url} alt="" />
        </div>
      
        <div className=' px-4'>
          <p><b>Name: </b> {githubData.name}</p>
          <p>{githubData.bio}</p>
          <div> <p><b>Followers :</b> {githubData.followers}</p>  <b>Following :</b> {githubData.following}</div>
          <p>location : {githubData.location}</p>
        </div>
      </div>
      </RecoilRoot>
    )
}