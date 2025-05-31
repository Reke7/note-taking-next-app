import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 p-20">
      <div className="max-w-md mx-auto">
            <label htmlFor="styled-textarea" className="block text-sm font-medium text-gray-700 mb-2">
                Note Taking
            </label>
            <textarea 
                id="note-taking-textarea"
                name="note-taking-textarea"
                autoFocus
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 resize-none"
                rows="5"
                placeholder="Write your notes here..."
                spellCheck="true"
                style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
            </textarea>
            
            <button class="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors hover:cursor-pointer mt-4">
            ADD NOTE
            </button>
        </div>
    </div>
  );
}
