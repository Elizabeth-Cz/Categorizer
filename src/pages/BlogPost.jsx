import Page from '../components/Page';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/placeholderImage.png';
import { BiArrowBack } from 'react-icons/bi';

const data = {
  image: placeholderImage,
  title: 'What is an IAB categorization?',
  updated: '15/03/2023',
  paragraph1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Mauris vitae risus orci. Donec pulvinar a 
nulla vitae suscipit. Integer rhoncus arcu in elit pharetra,
 vitae dapibus metus vehicula. `,
  paragraph2: `Nunc dapibus pretium suscipit. Pellentesque eu massa
 metus. Curabitur id porta risus. Cras lectus purus, 
 hendrerit at tortor ac, ultricies porta elit. `,
  paragraph3: `Aliquam pretium dignissim neque, dignissim blandit felis
 placerat vel. Proin vel justo viverra, posuere elit nec, 
 tincidunt dui. Etiam semper nulla quam, nec porttitor ex 
 vestibulum elementum. 
 Suspendisse luctus mi ac elit euismod, ut volutpat velit 
 convallis. Sed molestie egestas venenatis.
  Fusce commodo ac velit vel tincidunt. `,
  paragraph4: `Aliquam eu tellus sit amet nisi fermentum pharetra. 
  Vivamus nulla elit, tristique in eleifend finibus, 
  suscipit vitae tortor. Sed nec iaculis ante.
  Nullam a tincidunt elit. `,
};

const BlogPost = () => {
  const {
    title,
    updated,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    image,
  } = data;
  return (
    <Page>
      <Link
        to="/blog"
        className="flex items-center text-violet-300 my-5 hover:underline"
      >
        <BiArrowBack className="mr-2" />
        Back to blog
      </Link>

      <div className="mx-2 my-5">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-xs italic text-[#7f7f7f] my-1">
          Last updated: {updated}
        </p>
      </div>
      <p className="my-5">{paragraph1}</p>
      <img src={image || placeholderImage} alt="" />
      <p className="my-5">{paragraph2}</p>
      <p className="my-5">{paragraph3}</p>
      <p className="my-5">{paragraph4}</p>
    </Page>
  );
};

export default BlogPost;
