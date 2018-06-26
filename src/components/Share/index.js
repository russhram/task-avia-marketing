import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  VKShareButton,
  VKIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  OKShareButton,
  OKIcon,
} from 'react-share';

import {updateUser} from '../../actions';
import {userSelector} from '../../selectors';
import './Share.css';
import {User} from '../../models';

const socials = [
  {
    button: VKShareButton,
    icon: VKIcon,
  },
  {
    button: FacebookShareButton,
    icon: FacebookIcon,
  },
  {
    button: TwitterShareButton,
    icon: TwitterIcon,
  },
  {
    button: OKShareButton,
    icon: OKIcon,
  },
];

const shareUrl = 'https://kandidat.aviasales.ru/';

function Share({user, updateUser}) {
  return (
    <div className="share">
      {socials.map(({button: Button, icon: Icon}, idx) => (
        <div className="share__item" key={idx}>
          <Button
            url={shareUrl}
            onShareWindowClose={() => updateUser(user.set('shared', true))}
          >
            <Icon
              size={57}
              round
              className="test"
            />
          </Button>
        </div>
      ))}
    </div>
  );
}

Share.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(userSelector, {updateUser})(Share);
