import Storyblok from "../lib/storyblok";

export default function Test(props) {
  console.log(props);

  return <h1>Test Page</h1>;
}

export async function getStaticProps(context) {
  let slug = "pages/about";
  let params = {
    version: "draft", // or 'draft'
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
  // const { linkData } = await Storyblok.getAll(`cdn/links/`);

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
      // links: linkData ? linkData.links : null,
    },
    revalidate: 3600, // revalidate every hour
  };
}
