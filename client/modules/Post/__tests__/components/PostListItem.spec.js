import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import PostListItem from '../../components/PostListItem/PostListItem';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';

const post = { name: 'Prashant', title: 'Hello Mern', slug: 'hello-mern', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'mern!'" };
const props = {
  post,
  onDelete: () => {},
  thumbUpPost: () => {},
  thumbDownPost: () => {}
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(
    <PostListItem {...props} />
  );

  t.truthy(wrapper.hasClass('single-post'));
  t.is(wrapper.find('Link').first().prop('children'), post.title);
  t.regex(wrapper.find('.author-name').first().text(), new RegExp(post.name));
  t.is(wrapper.find('.post-desc').first().text(), post.content);
});

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <PostListItem {...props} />
  );

  t.deepEqual(wrapper.prop('post'), props.post);
  t.is(wrapper.prop('onClick'), props.onClick);
  t.is(wrapper.prop('onDelete'), props.onDelete);
  t.is(wrapper.prop('thumbUpPost'), props.thumbUpPost);
  t.is(wrapper.prop('thumbDownPost'), props.thumbDownPost);
});

test('calls onDelete', t => {
  const onDelete = sinon.spy();
  const wrapper = shallowWithIntl(
    <PostListItem post={post} onDelete={onDelete} />
  );

  test('calls thumbUpPost', t => {
  const thumbUpPost = sinon.spy();
  const wrapper = shallowWithIntl(
    <PostListItem post={post} thumbUpPost={thumbUpPost} />
  );

test('calls thumbDownPost', t => {
  const thumbDownPost = sinon.spy();
  const wrapper = shallowWithIntl(
    <PostListItem post={post} thumbDownPost={thumbDownPost} />
  );


  wrapper.find('.post-action > a').first().simulate('click');
  t.truthy(onDelete.calledOnce);
});


wrapper.find('.post-action > a').first().simulate('click');
  t.truthy(thumbUpPost.calledOnce);
});

  wrapper.find('.post-action > a').first().simulate('click');
  t.truthy(thumbDownPost.calledOnce);
});