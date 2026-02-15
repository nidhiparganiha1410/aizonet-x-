
import { AITool, BlogPost, Category, SiteSettings } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Productivity', slug: 'productivity', icon: '⚡', count: 142 },
  { id: '2', name: 'Design & Art', slug: 'design-art', icon: '🎨', count: 98 },
  { id: '3', name: 'Video & Motion', slug: 'video-motion', icon: '🎬', count: 76 },
  { id: '4', name: 'Coding & Dev', slug: 'coding-dev', icon: '💻', count: 64 },
  { id: '5', name: 'Marketing & Ads', slug: 'marketing-ads', icon: '📈', count: 52 },
  { id: '6', name: 'Social Media', slug: 'social-media', icon: '📱', count: 41 },
  { id: '7', name: 'Automation', slug: 'automation', icon: '🤖', count: 38 },
  { id: '8', name: 'Audio & Music', slug: 'audio-music', icon: '🎵', count: 29 },
  { id: '9', name: 'Redesigner AI', slug: 'redesigner-ai', icon: '🪄', count: 3 },
  { id: '10', name: "API Key's", slug: 'api-keys', icon: '🔑', count: 6 },
];

const generateTools = (): AITool[] => {
  const rawList = [
    { name: 'Stability AI', cat: "API Key's", pricing: 'Paid', url: 'https://platform.stability.ai/' },
    { name: 'Picsart', cat: "API Key's", pricing: 'Paid', url: 'https://picsart.io/api/ai-image-generator' },
    { name: 'AI Horde', cat: "API Key's", pricing: 'Free', url: 'https://aihorde.net/' },
    { name: 'Stable Horde', cat: "API Key's", pricing: 'Free', url: 'https://stablehorde.net/' },
    { name: 'ClipDrop', cat: "API Key's", pricing: 'Paid', url: 'https://clipdrop.co/apis' },
    { name: 'Hugging Face', cat: "API Key's", pricing: 'Freemium', url: 'https://huggingface.co/models' },
    { name: 'Redesignr.ai', cat: 'Redesigner AI', pricing: 'Freemium', url: 'https://redesignr.ai/' },
    { name: 'MyCleverAI', cat: 'Redesigner AI', pricing: 'Freemium', url: 'https://mycleverai.com/' },
    { name: 'PageTune.ai', cat: 'Redesigner AI', pricing: 'Freemium', url: 'https://pagetune.ai/' },
    { name: 'Hiver', cat: 'Productivity', pricing: 'Freemium', url: 'https://hiverhq.com/' },
    { name: 'Zapier', cat: 'Productivity', pricing: 'Freemium', url: 'https://zapier.com/' },
    { name: 'Notion AI', cat: 'Productivity', pricing: 'Freemium', url: 'https://notion.so/' },
    { name: 'Microsoft Copilot', cat: 'Productivity', pricing: 'Paid', url: 'https://copilot.microsoft.com/' },
    { name: 'Otter.ai', cat: 'Productivity', pricing: 'Freemium', url: 'https://otter.ai/' },
    { name: 'Grammarly', cat: 'Productivity', pricing: 'Freemium', url: 'https://grammarly.com/' },
    { name: 'Motion', cat: 'Productivity', pricing: 'Paid', url: 'https://usemotion.com/' },
    { name: 'Clockwise', cat: 'Productivity', pricing: 'Freemium', url: 'https://clockwise.com/' },
    { name: 'Reclaim AI', cat: 'Productivity', pricing: 'Freemium', url: 'https://reclaim.ai/' },
    { name: 'Adobe Firefly', cat: 'Design & Art', pricing: 'Freemium', url: 'https://firefly.adobe.com/' },
    { name: 'PXZ AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://pxz.ai/' },
    { name: 'Face Swap AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://faceswapai.online/' },
    { name: 'Artflow', cat: 'Design & Art', pricing: 'Freemium', url: 'https://app.artflow.ai/' },
    { name: 'Pixnova AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://pixnova.ai/' },
    { name: 'MimicPC', cat: 'Design & Art', pricing: 'Free', url: 'https://www.mimicpc.com/' },
    { name: 'Vecteezy AI', cat: 'Design & Art', pricing: 'Free', url: 'https://www.vecteezy.com/' },
    { name: 'DALL-E 3', cat: 'Design & Art', pricing: 'Paid', url: 'https://openai.com/dall-e-3' },
    { name: 'Midjourney', cat: 'Design & Art', pricing: 'Paid', url: 'https://midjourney.com/' },
    { name: 'Stable Diffusion', cat: 'Design & Art', pricing: 'Free', url: 'https://stability.ai/' },
    { name: 'Ideogram', cat: 'Design & Art', pricing: 'Freemium', url: 'https://ideogram.ai/' },
    { name: 'Leonardo AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://leonardo.ai/' },
    { name: 'Canva AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://canva.com/' },
    { name: 'Playground AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://playgroundai.com/' },
    { name: 'Napkin AI', cat: 'Design & Art', pricing: 'Freemium', url: 'https://napkin.ai/' },
    { name: 'Designify', cat: 'Design & Art', pricing: 'Freemium', url: 'https://designify.com/' },
    { name: 'Artta AI', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://artta.ai/' },
    { name: 'Artlist', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://artlist.io/' },
    { name: 'Kling AI', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://app.klingai.com/' },
    { name: 'Higgsfield', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://higgsfield.ai/' },
    { name: 'OpusClip', cat: 'Video & Motion', pricing: 'Paid', url: 'https://www.opus.pro/' },
    { name: 'D-ID', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://www.d-id.com/' },
    { name: 'Wondershare Filmora', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://filmora.wondershare.com/' },
    { name: 'Dreamlux AI', cat: 'Video & Motion', pricing: 'Free', url: 'https://dreamlux.ai/' },
    { name: 'KaraVideo', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://karavideo.ai/' },
    { name: 'Elai', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://elai.io/' },
    { name: 'Steve AI', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://www.steve.ai/' },
    { name: 'Synthesia', cat: 'Video & Motion', pricing: 'Paid', url: 'https://synthesia.io/' },
    { name: 'HeyEddie.ai', cat: 'Video & Motion', pricing: 'Paid', url: 'https://heyeddie.ai/' },
    { name: 'Runway', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://runwayml.com/' },
    { name: 'Pictory', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://pictory.ai/' },
    { name: 'Lumen5', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://lumen5.com/' },
    { name: 'Descript', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://descript.com/' },
    { name: 'InVideo AI', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://invideo.io/' },
    { name: 'Veed.io', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://veed.io/' },
    { name: 'CapCut', cat: 'Video & Motion', pricing: 'Free', url: 'https://capcut.com/' },
    { name: 'Luma AI', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://lumalabs.ai/' },
    { name: 'HeyGen', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://heygen.com/' },
    { name: 'Fliki', cat: 'Video & Motion', pricing: 'Freemium', url: 'https://fliki.ai/' },
    { name: 'Dropmagic', cat: 'Marketing & Ads', pricing: 'Freemium', url: 'https://dropmagic.ai/' },
    { name: 'Jasper', cat: 'Marketing & Ads', pricing: 'Paid', url: 'https://jasper.ai/' },
    { name: 'Copy.ai', cat: 'Marketing & Ads', pricing: 'Freemium', url: 'https://copy.ai/' },
    { name: 'AdCreative.ai', cat: 'Marketing & Ads', pricing: 'Freemium', url: 'https://adcreative.ai/' },
    { name: 'Persado', cat: 'Marketing & Ads', pricing: 'Paid', url: 'https://persado.com/' },
    { name: 'Narrato', cat: 'Marketing & Ads', pricing: 'Freemium', url: 'https://narrato.io/' },
    { name: 'MarketMuse', cat: 'Marketing & Ads', pricing: 'Paid', url: 'https://marketmuse.com/' },
    { name: 'Munch Studio', cat: 'Social Media', pricing: 'Freemium', url: 'https://www.munchstudio.com/' },
    { name: 'Tweet Hunter', cat: 'Social Media', pricing: 'Paid', url: 'https://tweethunter.io/' },
    { name: 'Mavic AI', cat: 'Social Media', pricing: 'Freemium', url: 'https://mavic.ai/' },
    { name: 'Vista Social', cat: 'Social Media', pricing: 'Freemium', url: 'https://vistasocial.com/' },
    { name: 'Niche Traffic Kit', cat: 'Social Media', pricing: 'Freemium', url: 'https://nichetraffickit.com/' },
    { name: 'Brand24', cat: 'Social Media', pricing: 'Paid', url: 'https://brand24.com/' },
    { name: 'Buffer', cat: 'Social Media', pricing: 'Freemium', url: 'https://buffer.com/' },
    { name: 'Hootsuite', cat: 'Social Media', pricing: 'Freemium', url: 'https://hootsuite.com/' },
    { name: 'Lately AI', cat: 'Social Media', pricing: 'Paid', url: 'https://lately.ai/' },
    { name: 'Predis.ai', cat: 'Social Media', pricing: 'Freemium', url: 'https://predis.ai/' },
    { name: 'Taplio', cat: 'Social Media', pricing: 'Paid', url: 'https://taplio.com/' },
    { name: 'AppWizzy', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://appwizzy.com/' },
    { name: 'Emergent', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://app.emergent.sh/' },
    { name: 'Replit', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://replit.com/' },
    { name: 'Tabnine', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://www.tabnine.com/' },
    { name: 'GitHub Copilot', cat: 'Coding & Dev', pricing: 'Paid', url: 'https://github.com/features/copilot' },
    { name: 'Cursor', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://cursor.sh/' },
    { name: 'Codeium', cat: 'Coding & Dev', pricing: 'Free', url: 'https://codeium.com/' },
    { name: 'Amazon CodeWhisperer', cat: 'Coding & Dev', pricing: 'Free', url: 'https://aws.amazon.com/codewhisperer/' },
    { name: 'Claude Code', cat: 'Coding & Dev', pricing: 'Paid', url: 'https://claude.ai/' },
    { name: 'Windsurf', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://codeium.com/windsurf' },
    { name: 'V0 by Vercel', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://v0.dev/' },
    { name: 'Bolt.new', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://bolt.new/' },
    { name: 'Qodo', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://qodo.ai/' },
    { name: 'Sourcegraph Cody', cat: 'Coding & Dev', pricing: 'Freemium', url: 'https://sourcegraph.com/cody' },
    { name: 'Aider', cat: 'Coding & Dev', pricing: 'Free', url: 'https://aider.chat/' },
    { name: 'Continue', cat: 'Coding & Dev', pricing: 'Free', url: 'https://continue.dev/' },
    { name: 'MindStudio', cat: 'Automation', pricing: 'Automation', url: 'https://www.mindstudio.ai/' },
    { name: 'n8n', cat: 'Automation', pricing: 'Freemium', url: 'https://n8n.io/' },
    { name: 'Wadesk', cat: 'Automation', pricing: 'Freemium', url: 'https://wadesk.io/' },
    { name: 'Lindy', cat: 'Automation', pricing: 'Paid', url: 'https://lindy.ai/' },
    { name: 'Hexofy', cat: 'Automation', pricing: 'Freemium', url: 'https://hexofy.com/' },
    { name: 'Make', cat: 'Automation', pricing: 'Freemium', url: 'https://make.com/' },
  ];

  return rawList.map((tool, index) => {
    let description = `A powerful ${tool.cat} tool that helps users leverage AI for ${tool.name.toLowerCase()} related tasks effectively.`;
    let longDescription = `${tool.name} is a comprehensive solution designed for ${tool.cat}. It integrates advanced machine learning models to streamline workflows, providing users with high-quality outputs and significant time savings.`;
    let features = ['AI-powered intelligence', 'User-friendly interface', 'Seamless integration', 'Customizable workflows'];

    if (tool.name === 'Redesignr.ai') {
      description = "Instantly redesign your website by entering its URL and describing your vision.";
      longDescription = "Redesignr.ai leverages AI to analyze your existing website and generate modern, conversion-optimized designs.";
      features = ['URL-to-Design', 'Plain English prompts', 'No-code workflow', 'Conversion optimized'];
    }

    return {
      id: `tool-${index}`,
      name: tool.name,
      slug: tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      description,
      longDescription,
      features,
      category: tool.cat,
      tags: [tool.cat.split(' ')[0], 'AI', 'API', 'Developer'],
      pricing: tool.pricing as 'Free' | 'Freemium' | 'Paid',
      websiteUrl: tool.url,
      logoUrl: `https://picsum.photos/seed/${tool.name}/200`,
      imageUrl: `https://picsum.photos/seed/${tool.name}-ui/1200/630`,
      rating: 4.2 + (Math.random() * 0.7),
      reviewCount: Math.floor(Math.random() * 500) + 50,
      isFeatured: tool.cat === "API Key's",
      isTrending: tool.cat === "API Key's",
      createdAt: '2026-05-24',
      status: 'active'
    };
  });
};

export const MOCK_TOOLS: AITool[] = generateTools();

export const MOCK_SUBMISSIONS: AITool[] = [
  {
    id: 's1',
    name: 'VideoGen AI',
    slug: 'videogen-ai',
    description: 'A revolutionary tool for generating high-quality marketing videos from text descriptions.',
    features: ['Text-to-video', 'AI Voiceovers', 'Auto-subtitles'],
    category: 'Video & Motion',
    tags: ['Video', 'Marketing', 'Automation'],
    pricing: 'Freemium',
    websiteUrl: 'https://videogen.ai',
    logoUrl: 'https://picsum.photos/seed/videogen/200',
    rating: 0,
    reviewCount: 0,
    createdAt: '2026-05-24',
    status: 'pending'
  }
];

// Added missing MOCK_AUTHORS to fix AdminBlog import error
export const MOCK_AUTHORS = {
  alex: {
    name: 'Alex Rivera',
    role: 'Lead AI Researcher',
    bio: 'Alex has been covering the AI beat since 2018, specializing in large language models and productivity automation.',
    imageUrl: 'https://picsum.photos/seed/alex/200'
  }
};

export const MOCK_POSTS: BlogPost[] = []; // Initialized as empty or from generator

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  seo: {
    siteUrl: 'https://aizonet.in',
    googleAnalyticsId: 'G-AIZONET2026',
    googleSearchConsoleId: 'sc-verification-placeholder-2026',
    bingVerification: 'bing-site-verification=aizonet_verified',
    yandexVerification: 'yandex-verification=aizonet_verified',
    baiduVerification: '',
    pinterestVerification: '',
    facebookDomainVerification: '',
    robotsTxt: 'User-agent: *\nAllow: /\nSitemap: https://aizonet.in/sitemap.xml',
    sitemapUrl: 'https://aizonet.in/sitemap.xml'
  },
  ads: {
    adSenseClientId: 'ca-pub-aizonet',
    placements: {
      header: { id: 'h1', name: 'Header Ad', isEnabled: true, code: '<div class="h-20 w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">Leaderboard Ad (728x90)</div>' },
      footer: { id: 'f1', name: 'Footer Ad', isEnabled: true, code: '<div class="h-24 w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">Footer Banner Ad</div>' },
      blogContent: { id: 'b1', name: 'Blog Post Ad', isEnabled: true, code: '<div class="h-64 w-full bg-slate-50 dark:bg-slate-900 border border-dashed rounded-xl flex items-center justify-center text-xs text-slate-400 my-8">Article Contextual Ad</div>' },
      toolDirectory: { id: 't1', name: 'Directory Ad', isEnabled: true, code: '<div class="h-full min-h-[150px] w-full bg-indigo-50 dark:bg-indigo-950/20 border-2 border-dashed border-indigo-200 dark:border-indigo-900 rounded-2xl flex items-center justify-center text-center p-4 text-xs text-indigo-400 font-bold">SPONSORED SPACE</div>' },
    }
  }
};
