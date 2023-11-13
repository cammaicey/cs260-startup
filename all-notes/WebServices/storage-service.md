# Storage Services
- store files associated with the application or users
- files usually have an ID, some metadata, and bytes repping the file
- storing files directing in server is a bad idea
    1. Your server has limited drive space. If you server runs out of drive space your entire application will fail.
    2. You should consider your server as being ephemeral, or temporary. It can be thrown away and replaced by a copy at any time. If you start storing files on the server, then your server has state that cannot be easily replaced.
    3. You need backup copies of your application and user files. If you only have one copy of your files on your server, then they will disappear when your server disappears, and you must always assume that your server will disappear.
- instead you wanna use a storage service to support this

## AWS S3
- S3 provides the follwoing advantages
    1. It has unlimited capacity
    2. You only pay for the storage that you use
    3. It is optimized for global access
    4. It keeps multiple redundant copies of every file
    5. You can version the files
    6. It is performant
    7. It supports metadata tags
    8. You can make your files publicly available directly from S3
    9. You can keep your files private and only accessible to your application
- if I wanna use AWS S3 (this is not necessary)
    1. Creating a S3 bucket to store your data in.
    2. Getting credentials so that your application can access the bucket.
    3. [Using](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) the credentials in your application.
    4. Using the [SDK](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html) to write, list, read, and delete files from the bucket.
- Make sure that you do not include your credentials in your code. If you check your credentials into your GitHub repository they will immediately be stolen and used by hackers to take over your AWS account. This may result in significant monetary damage to you.