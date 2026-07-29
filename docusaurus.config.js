// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '文档中心 · 帮助中心',
  tagline: '中政集团 ZHONG ZHENG GROUP',
  favicon: 'img/favicon.ico',

  url: 'https://docs.zhoeng.com.cn',   // 改为你的实际域名
  baseUrl: '/',

  organizationName: 'ZHOENGGROUP',      // 你的 GitHub 用户名
  projectName: 'docs',                  // 你的仓库名

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // 多语言：暂只保留中文，英文后续添加
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: false,
          // 版本管理暂时不配置，等创建版本后再添加
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ZHOENGGROUP/docs/edit/main/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        language: ['zh'],
        hashed: true,
        searchResultContextMaxLength: 80,
        // 默认索引所有文档，不限制版本
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: '文档 · 帮助',
        logo: {
          alt: '文档 · 帮助',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'helpSidebar',
            position: 'left',
            label: '文档与帮助',
          },
          {
            type: 'docSidebar',
            sidebarId: 'articleSidebar',
            position: 'left',
            label: '主站文章库',
          },
          // 语言下拉框、版本下拉框稍后添加
          // GitHub 图标链接
          {
            href: 'https://github.com/ZHOENGGROUP/docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { label: '用户协议', to: '/docs/help/useragreement' },
              { label: '隐私政策', to: '/docs/help/privacypolicy' },
              { label: '免责声明', to: '/docs/help/disclaimer' },
            ],
          },
          {
            title: '关于',
            items: [
              { label: '中政集团', href: 'https://www.zhoeng.com.cn/' },
              { label: 'GitHub', href: 'https://github.com/ZHOENGGROUP/docs' },
            ],
          },
        ],
        copyright: `Copyright © 2025 - ${new Date().getFullYear()} 中政集团 ZHONG ZHENG GROUP   Copyright © 2025 - ${new Date().getFullYear()} 中政科技 ZHONG ZHENG TECHNOLOGY\nBuilt with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'powershell'],
      },
    }),
};

export default config;
