                    
                      const arr = [
        { id: 1, text: "text", date: new Date(), author: "Author1" },
        { id: 2, text: "text2", date: new Date(), author: "Author2" },
        { id: 3, text: "text3", date: new Date(), author: "Author3" }
    ]
                    
                    
                    
                    {JSON.stringify(arr[1])}

                    {arr.map((massage) => {
                        return ( <Massage 
                            text={massage.text}
                            id={massage.id}/>
                        )
                    })}