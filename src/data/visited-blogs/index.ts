import type { StaticBlog } from "./types";

import malaysia from "./malaysia";
import singapore from "./singapore";
import brunei from "./brunei";
import thailand from "./thailand";
import cambodia from "./cambodia";
import vietnam from "./vietnam";
import indonesia from "./indonesia";
import taiwan from "./taiwan";
import japan from "./japan";
import hongKong from "./hong-kong";
import macau from "./macau";
import kazakhstan from "./kazakhstan";
import uzbekistan from "./uzbekistan";
import tajikistan from "./tajikistan";
import georgia from "./georgia";
import armenia from "./armenia";
import turkey from "./turkey";
import taichung from "./taichung";
import kotaKinabalu from "./kota-kinabalu";
import phuket from "./phuket";
import phnomPenh from "./phnom-penh";
import greece from "./greece";
import italy from "./italy";
import spain from "./spain";
import vatican from "./vatican";
import austria from "./austria";
import switzerland from "./switzerland";
import belgium from "./belgium";
import albania from "./albania";
import montenegro from "./montenegro";
import bosnia from "./bosnia";
import serbia from "./serbia";

export const staticBlogs: StaticBlog[] = [
  malaysia,
  singapore,
  brunei,
  thailand,
  cambodia,
  vietnam,
  indonesia,
  taiwan,
  japan,
  hongKong,
  macau,
  kazakhstan,
  uzbekistan,
  tajikistan,
  georgia,
  armenia,
  turkey,
  taichung,
  kotaKinabalu,
  phuket,
  phnomPenh,
  greece,
  italy,
  spain,
  vatican,
  austria,
  switzerland,
  belgium,
  albania,
  montenegro,
  bosnia,
  serbia,
];

export const staticBlogsBySlug = staticBlogs.reduce<Record<string, StaticBlog>>(
  (acc, blog) => {
    acc[blog.slug] = blog;
    return acc;
  },
  {},
);

export const getStaticBlogBySlug = (slug: string) =>
  staticBlogsBySlug[slug] ?? null;
