// ClineMCP 示例文件

// 示例：使用MCP工具读取文件
const mcp = require('@modelcontextprotocol/sdk');

async function example() {
  try {
    const result = await mcp.readFile('path/to/file.txt');
    console.log('文件内容:', result);
  } catch (error) {
    console.error('读取文件时出错:', error);
  }
}

example();