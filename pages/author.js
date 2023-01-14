import {useState, useEffect} from "react";

import Style from "../styles/author.module.css";
import {Banner, NFTCardTwo} from "../collectionPage";
import {AuthorNFTCardBox, AuthorProfileCard, AuthorTaps} from "../authorPage";
import {Brand, Title} from "../components";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";

const author = () => {
  const followerArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;
