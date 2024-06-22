module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // adjust the output path as needed
            },
          },
        ],
      },
    ],
}
  