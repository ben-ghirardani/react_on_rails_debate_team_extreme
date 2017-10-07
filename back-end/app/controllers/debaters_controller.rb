class DebatersController < ApplicationController

def index
    @debaters = [ 
        { name: "Dave", debate: 7 }, 
        { name: "Sarah", debate: 8 }, 
        { name: "Edward", debate: 6 }, 
        { name: "Lauren", debate: 9 },
        { name: "Jeremy", debate: 8 },
        { name: "Mary", debate: 5 },
        { name: "John", debate: 7 },
        { name: "Katie", debate: 8 },
        { name: "Clive", debate: 3 },
        { name: "Claire", debate: 4 } 
    ]
    render :json => @debaters
end

end