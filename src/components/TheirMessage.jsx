const TheirMessage = ({ lastMessage, message }) => {
    const ifFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div className="message-row">
            {ifFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {
                message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: ifFirstMessageByUser ? '4px' : '48px' }}
                    />
                )
                :
                (
                    <div className="message" style={{ float: 'left ', color: 'white', backgroundColor: '#71aaeb', marginLeft: ifFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }
        </div>
    )
}

export default TheirMessage