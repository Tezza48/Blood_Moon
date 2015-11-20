#pragma strict
@SerializeField
private var rotationSpeed : float = 5;
private var rotation : Vector3 = new Vector3();

function Update () {
	rotation = Vector3(0, 0, Input.GetAxis("Horizontal") * rotationSpeed * Time.deltaTime);
	transform.Rotate(rotation);
}