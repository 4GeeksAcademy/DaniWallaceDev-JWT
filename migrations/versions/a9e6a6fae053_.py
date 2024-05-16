"""empty message

Revision ID: a9e6a6fae053
Revises: 838beec29b34
Create Date: 2024-05-15 22:06:10.960079

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a9e6a6fae053'
down_revision = '838beec29b34'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
