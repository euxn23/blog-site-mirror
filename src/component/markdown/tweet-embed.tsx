'use client'

import { TwitterTweetEmbed } from 'react-twitter-embed'

const TweetEmbed = ({ tweetId }: { tweetId: string }) => <TwitterTweetEmbed tweetId={tweetId} />

export default TweetEmbed
