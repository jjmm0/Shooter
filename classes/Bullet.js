export default class Bullet {
    constructor(id, yVel, xVel, damage, hitbox, xPos, yPos){
        this._number = id
        this._yVelocity = yVel,
        this._xVelocity = xVel,
        this._damage = damage,
        this._hitbox = hitbox,
        this._xPos = xPos,
        this._yPos = yPos
    };


    static bulletUpdate(_yVelocity, _xVelocity, _hitbox, _xPos, _yPos)
    {            
        
    }


}
