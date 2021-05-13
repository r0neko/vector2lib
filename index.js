class Vector2 {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }

    Add() {
        if (arguments[0] instanceof Vector2) {
            this.X += arguments[0].X;
            this.Y += arguments[0].Y;
        } else {
            this.X += arguments[0] != null ? arguments[0] : 0;
            this.Y += arguments[1] != null ? arguments[1] : (arguments[0] != null ? arguments[0] : 0);
        }

        return this;
    }

    Multiply() {
        if (arguments[0] instanceof Vector2) {
            this.X *= arguments[0].X;
            this.Y *= arguments[0].Y;
        } else {
            this.X *= arguments[0] != null ? arguments[0] : 0;
            this.Y *= arguments[1] != null ? arguments[1] : (arguments[0] != null ? arguments[0] : 0);
        }

        return this;
    }

    Subtract() {
        if (arguments[0] instanceof Vector2) {
            this.X -= arguments[0].X;
            this.Y -= arguments[0].Y;
        } else {
            this.X -= arguments[0] != null ? arguments[0] : 0;
            this.Y -= arguments[1] != null ? arguments[1] : (arguments[0] != null ? arguments[0] : 0);
        }

        return this;
    }

    Angle(Radians) {
        if (Radians != null) {
            this.X = this.Length;
            this.Y = 0;
            return this.Rotate(Radians);
        }

        return ((a = Math.atan2(this.Y, this.X)) < 0 && (a += Math.PI * 2));
    }

    AngleDeg(Degrees) {
        if (Degrees != null) return this.Angle(Degrees / 180 * Math.PI);
        return this.Angle() * 180 / Math.PI;
    }

    Distance(x, y) {
        let d = this.DistanceSquared(x, y);
        if (d != null)
            return Math.sqrt(d);
        return null;
    }

    DistanceSquared(x, y) {
        let dx, dy;

        if (x instanceof Vector2) {
            dx = x.X - this.X;
            dy = x.Y - this.Y;
        } else if (y !== null) {
            dx = X - this.X;
            dy = Y - this.Y;
        } else
            return null;

        return Math.pow(dx, 2) + Math.pow(dy, 2);
    }

    Length() {
        return Math.sqrt(this.LengthSquared());
    }

    LengthSquared() {
        return Math.pow(this.X, 2) + Math.pow(this.Y, 2);
    }

    Rotate(Radians) {
        var cos = Math.cos(Radians);
        var sin = Math.sin(Radians);

        this.X = this.X * cos - this.Y * sin;
        this.Y = this.X * sin + this.Y * cos;

        return this;
    }

    RotateDegrees(Degrees) {
        return this.Rotate(Degrees / 180 * Math.PI)
    }

    toString() {
        return `Vector2(${this.X}, ${this.Y})`;
    }
}

module.exports = Vector2;