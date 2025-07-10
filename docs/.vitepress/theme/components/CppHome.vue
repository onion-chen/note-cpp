<template>
    <div class="cpp-home">
      <div class="cpp-hero">
        <img class="cpp-logo" src="/note-cpp/assets/logo.png" alt="C++ Logo" />
        <h1>C++ 学习笔记</h1>
        <p class="cpp-desc">系统梳理 C++ 基础与进阶知识，适合初学者和进阶者查阅。</p>
      </div>
      <div class="cpp-section">
        <h2>学习建议</h2>
        <ul>
          <li>建议先通读基础部分，再逐步深入进阶内容。</li>
          <li>每个知识点配有详细讲解与示例代码。</li>
          <li>遇到不懂的地方可结合官方文档或社区资源查阅。</li>
        </ul>
      </div>
      <div class="cpp-section">
        <h2>目录</h2>
        <h3>基础入门</h3>
        <ul>
          <li><a href="/cpp/C++历史">1、C++历史</a></li>
          <li><a href="/cpp/数据类型">2、数据类型</a></li>
        </ul>
        <h3>进阶内容</h3>
        <ul>
          <li>（待补充）</li>
        </ul>
      </div>
      <div class="cpp-section">
        <h2>推荐外部资源</h2>
        <ul>
          <li><a href="https://en.cppreference.com/w/" target="_blank">C++ 官方文档</a></li>
        </ul>
      </div>
      <div class="cpp-footer">
        <em>本文档持续更新，欢迎收藏与分享！</em>
      </div>
    </div>
  </template>
  
  <style scoped>
  .cpp-home {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    background: #f8fafc;
    border-radius: 16px;
    box-shadow: 0 4px 24px #0001;
  }
  .cpp-hero {
    text-align: center;
    margin-bottom: 2rem;
  }
  .cpp-logo {
    width: 80px;
    margin-bottom: 1rem;
  }
  .cpp-desc {
    color: #666;
    font-size: 1.1rem;
  }
  .cpp-section {
    margin-bottom: 2rem;
  }
  .cpp-section h2 {
    color: #2563eb;
    margin-bottom: 0.5rem;
  }
  .cpp-section ul {
    padding-left: 1.5rem;
  }
  .cpp-section li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  .cpp-footer {
    text-align: center;
    color: #888;
    margin-top: 2rem;
    font-size: 0.95rem;
  }
  </style>