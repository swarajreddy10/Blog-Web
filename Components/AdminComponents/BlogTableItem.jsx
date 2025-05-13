import { assets } from '@/Assets/assets'
import Image from 'next/image'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const blogDate = new Date(date)

    return (
        <tr className="bg-white border-b">
            <th
                scope="row"
                className="hidden sm:flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                <Image
                    width={40}
                    height={40}
                    src={authorImg || assets.profile_icon}
                    alt="Author"
                    className="rounded-full"
                />
                <p>{author || 'No author'}</p>
            </th>
            <td className="px-6 py-4">{title || 'No title'}</td>
            <td className="px-6 py-4">{isNaN(blogDate) ? 'Invalid date' : blogDate.toDateString()}</td>
            <td
                onClick={() => deleteBlog(mongoId)}
                className="px-6 py-4 cursor-pointer text-red-600 hover:text-red-800 font-bold"
                title="Delete blog"
            >
                ×
            </td>
        </tr>
    )
}

export default BlogTableItem
