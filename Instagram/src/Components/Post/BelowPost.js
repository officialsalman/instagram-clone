import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import { BsFillHeartFill } from 'react-icons/bs';
import { useState } from 'react';

function BelowPost() {
  const [heart, setHeart] = useState(false);
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-1'>
            {heart ? (
              <BsFillHeartFill
                className='text-danger display-6'
                onClick={() => {
                  setHeart(!heart);
                }}
              />
            ) : (
              <AiOutlineHeart
                className='text-white display-6'
                onClick={() => {
                  setHeart(!heart);
                }}
              />
            )}
          </div>
          <div className='col-1'>
            <FaRegComment className='text-white display-6' />
          </div>
          <div className='col-1'>
            <IoMdPaperPlane className='text-white display-6' />
          </div>
        </div>
      </div>
    </>
  );
}

export default BelowPost;
